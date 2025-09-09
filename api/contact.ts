import { Resend } from 'resend';

// Define the email addresses from environment variables with defaults
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@marshalltaylor.org';
const TO_EMAIL = process.env.CONTACT_EMAIL || 'placeholder@example.com';

// Handle CORS preflight requests
export async function OPTIONS(request: Request) {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

// Handle GET requests - useful for testing if the endpoint is working
export async function GET(request: Request) {
  return new Response(
    JSON.stringify({ message: 'Contact form API endpoint' }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
}

export async function POST(request: Request) {
  // Check if RESEND_API_KEY is set
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return new Response(
      JSON.stringify({ error: 'Server configuration error: Missing RESEND_API_KEY' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }

  // Initialize Resend with API key from environment variables
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // Parse the request body
    const { name, email, body, recaptchaToken } = await request.json();

    // Validate required fields
    if (!name || !email || !body) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: name, email, body' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    // Verify reCAPTCHA token if provided
    if (recaptchaToken) {
      const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
      if (!recaptchaSecret) {
        // Log warning but don't fail the request if reCAPTCHA is not configured
        console.warn('RECAPTCHA_SECRET_KEY is not set, skipping reCAPTCHA verification');
      } else {
        // Verify the reCAPTCHA token with Google
        const recaptchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`;
        const recaptchaResponse = await fetch(recaptchaVerifyUrl, { method: 'POST' });
        const recaptchaData = await recaptchaResponse.json();

        if (!recaptchaData.success) {
          return new Response(
            JSON.stringify({ error: 'reCAPTCHA verification failed' }),
            {
              status: 400,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            }
          );
        }
      }
    }
    // If no recaptchaToken is provided, we'll proceed without verification

    // Send notification email to myself
    const notificationEmail = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
You have received a new message from your website contact form.

Name: ${name}
Email: ${email}
Message:
${body}
      `,
    });

    // Send confirmation email to the user
    const confirmationEmail = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      replyTo: TO_EMAIL,
      subject: 'Thank you for contacting me!',
      text: `
Thank you for reaching out to me, ${name}!

I have received your message and will get back to you as soon as possible.

Your message:
${body}

Best regards,
Marshall Taylor
      `,
    });

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Emails sent successfully',
        notificationId: notificationEmail.data?.id,
        confirmationId: confirmationEmail.data?.id,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    console.error('Error sending emails:', error);
    
    // Return error response
    return new Response(
      JSON.stringify({
        error: 'Failed to send emails',
        message: error instanceof Error ? error.message : 'Unknown error occurred',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}
