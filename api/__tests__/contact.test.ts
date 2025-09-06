import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import handler from '../contact';

// Mock the Resend module
vi.mock('resend', () => {
  return {
    Resend: vi.fn().mockImplementation(() => {
      return {
        emails: {
          send: vi.fn().mockResolvedValue({
            data: { id: 'test-id-1' },
            error: null,
          }),
        },
      };
    }),
  };
});

describe('Contact API Handler', () => {
  const mockRequest = (method: string, body?: any): Request => {
    return {
      method,
      json: () => Promise.resolve(body),
    } as unknown as Request;
  };

  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  afterEach(() => {
    // Reset environment variables
    delete process.env.RESEND_API_KEY;
    delete process.env.CONTACT_EMAIL;
    delete process.env.FROM_EMAIL;
  });

  it('should reject non-POST requests', async () => {
    const request = mockRequest('GET');
    const response = await handler(request);
    
    expect(response.status).toBe(405);
    const responseBody = await response.json();
    expect(responseBody.error).toBe('Method not allowed');
  });

  it('should reject requests when RESEND_API_KEY is missing', async () => {
    // Don't set RESEND_API_KEY
    const request = mockRequest('POST', {
      name: 'John Doe',
      email: 'john@example.com',
      body: 'Hello, this is a test message',
    });
    
    const response = await handler(request);
    
    expect(response.status).toBe(500);
    const responseBody = await response.json();
    expect(responseBody.error).toContain('Server configuration error');
  });

  it('should reject requests with missing fields', async () => {
    // Set up environment variables
    process.env.RESEND_API_KEY = 'test-key';
    
    const request = mockRequest('POST', {
      name: 'John Doe',
      // Missing email and body
    });
    
    const response = await handler(request);
    
    expect(response.status).toBe(400);
    const responseBody = await response.json();
    expect(responseBody.error).toContain('Missing required fields');
  });

  it('should reject requests with invalid email format', async () => {
    // Set up environment variables
    process.env.RESEND_API_KEY = 'test-key';
    
    const request = mockRequest('POST', {
      name: 'John Doe',
      email: 'invalid-email',
      body: 'Hello, this is a test message',
    });
    
    const response = await handler(request);
    
    expect(response.status).toBe(400);
    const responseBody = await response.json();
    expect(responseBody.error).toBe('Invalid email format');
  });

  it('should use default FROM_EMAIL when not provided', async () => {
    // Set up environment variables without FROM_EMAIL
    process.env.RESEND_API_KEY = 'test-key';
    process.env.CONTACT_EMAIL = 'contact@example.com';
    
    const request = mockRequest('POST', {
      name: 'John Doe',
      email: 'john@example.com',
      body: 'Hello, this is a test message',
    });
    
    const response = await handler(request);
    
    expect(response.status).toBe(200);
  });

  it('should use custom FROM_EMAIL when provided', async () => {
    // Set up environment variables with custom FROM_EMAIL
    process.env.RESEND_API_KEY = 'test-key';
    process.env.CONTACT_EMAIL = 'contact@example.com';
    process.env.FROM_EMAIL = 'custom@example.com';
    
    const request = mockRequest('POST', {
      name: 'John Doe',
      email: 'john@example.com',
      body: 'Hello, this is a test message',
    });
    
    const response = await handler(request);
    
    expect(response.status).toBe(200);
  });

  it('should send emails successfully with valid input', async () => {
    // Set up environment variables
    process.env.RESEND_API_KEY = 'test-key';
    process.env.CONTACT_EMAIL = 'contact@example.com';
    
    const request = mockRequest('POST', {
      name: 'John Doe',
      email: 'john@example.com',
      body: 'Hello, this is a test message',
    });
    
    const response = await handler(request);
    
    expect(response.status).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.success).toBe(true);
    expect(responseBody.notificationId).toBe('test-id-1');
  });

  it('should handle Resend API errors', async () => {
    // Set up environment variables
    process.env.RESEND_API_KEY = 'test-key';
    process.env.CONTACT_EMAIL = 'contact@example.com';
    
    // Mock Resend's send method to throw an error
    const { Resend } = await import('resend');
    (Resend as any).mockImplementation(() => ({
      emails: {
        send: vi.fn().mockRejectedValue(new Error('API Error')),
      },
    }));
    
    const request = mockRequest('POST', {
      name: 'John Doe',
      email: 'john@example.com',
      body: 'Hello, this is a test message',
    });
    
    const response = await handler(request);
    
    expect(response.status).toBe(500);
    const responseBody = await response.json();
    expect(responseBody.error).toBe('Failed to send emails');
    expect(responseBody.message).toBe('API Error');
  });
});