# Contact Form API

This directory contains the serverless function for handling contact form submissions using Resend.

## Environment Variables

To use this function, you need to set the following environment variables in your Vercel project:

1. `RESEND_API_KEY` - Your Resend API key (get it from https://resend.com/dashboard)
2. `CONTACT_EMAIL` - The email address where you want to receive notifications
3. `FROM_EMAIL` - The email address to send emails from (optional, defaults to noreply@marshalltaylor.org)

## Setup Instructions

1. Sign up for a Resend account at https://resend.com/
2. Obtain your API key from the Resend dashboard
3. Add your domain in Resend (e.g., marshalltaylor.org) and verify it
4. Set the environment variables in your Vercel project:
   ```bash
   vercel env add RESEND_API_KEY
   vercel env add CONTACT_EMAIL
   vercel env add FROM_EMAIL  # Optional
   ```
5. Deploy your project to Vercel

## Function Details

The contact form function (`contact.ts`) handles POST requests and:

1. Validates the input data
2. Sends a notification email to your CONTACT_EMAIL address with the user's message
3. Sends a confirmation email to the user
4. Uses the FROM_EMAIL environment variable (or noreply@marshalltaylor.org by default) as the sender address for both emails

## Testing

Run the tests with:
```bash
npm run test
```