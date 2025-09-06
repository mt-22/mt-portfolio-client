# Contact Form API - Deployment TODO

## Prerequisites
- [ ] Sign up for a Resend account at https://resend.com/
- [ ] Obtain your API key from the Resend dashboard
- [ ] Add your domain (marshalltaylor.org) in Resend and verify it

## Environment Variables Setup
- [ ] Set RESEND_API_KEY in Vercel environment variables
- [ ] Set CONTACT_EMAIL in Vercel environment variables (where you want to receive notifications)
- [ ] Optionally set FROM_EMAIL in Vercel environment variables (defaults to noreply@marshalltaylor.org)

## Vercel Deployment
- [ ] Deploy your project to Vercel
- [ ] Verify the contact form works correctly in production

## Testing
- [ ] Run `npm run test` to execute the test suite
- [ ] Verify all tests pass

## Notes
- The serverless function is located at `/api/contact.ts`
- The function handles POST requests and sends two emails via Resend:
  1. A notification email to CONTACT_EMAIL
  2. A confirmation email to the user
- Both emails are sent from FROM_EMAIL (or noreply@marshalltaylor.org by default)