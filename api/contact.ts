import { Resend } from 'resend';

// Define the email addresses from environment variables with defaults
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@marshalltaylor.org';

const TO_EMAIL = process.env.CONTACT_EMAIL || 'placeholder@example.com';

export default async function handler(request: Request) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  }

  // Check if RESEND_API_KEY is set
  if (!process.env.RESEND_API_KEY) {
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
    const { name, email, body } = await request.json();

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
