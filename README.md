# Marshall Taylor's Portfolio

This is the personal portfolio website of Marshall Taylor, built with React and TypeScript.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Contact Form

This portfolio includes a contact form that uses a serverless function to send emails via Resend.

### How it works

When a user submits the contact form:
1. The form data is sent to a Vercel serverless function (`/api/contact`)
2. The function validates the input and sends two emails using Resend:
   - A notification email to the site owner
   - A confirmation email to the user
3. Both emails are sent from the `FROM_EMAIL` environment variable or `noreply@marshalltaylor.org` by default

### Setup

To enable the contact form functionality:
1. Sign up for a Resend account at https://resend.com/
2. Obtain your API key from the Resend dashboard
3. Add your domain in Resend and verify it
4. Set the following environment variables in your Vercel project:
   - `RESEND_API_KEY`: Your Resend API key
   - `CONTACT_EMAIL`: The email address where you want to receive notifications
   - `FROM_EMAIL`: (Optional) The email address to send emails from (defaults to noreply@marshalltaylor.org)
   
To enable the reCAPTCHA verification:
1. Sign up for Google reCAPTCHA at https://www.google.com/recaptcha/admin
2. Register your domain and obtain your site key and secret key
3. Set the following environment variables:
   - `VITE_RECAPTCHA_SITE_KEY`: Your reCAPTCHA site key (for frontend)
   - `RECAPTCHA_SECRET_KEY`: Your reCAPTCHA secret key (for backend verification)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
