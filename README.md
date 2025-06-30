# Salesforce Email Relay Server

This project is a Node.js server using Express that receives POST requests from Salesforce containing a message and recipient, and sends an email using Nodemailer.

## Features
- Receives POST requests at `/send-message` with `recipient` and `message` in the JSON body
- Sends an email to the recipient with the message
- Ready for deployment on Render

## Setup
1. Install dependencies:
   ```sh
   npm install
   ```
2. Set environment variables (in Render dashboard or `.env` for local testing):
   - `EMAIL_USER` (your email address)
   - `EMAIL_PASS` (your email password or app password)
3. Start the server:
   ```sh
   node index.js
   ```

## Example Request
```
POST /send-message
Content-Type: application/json
{
  "recipient": "someone@example.com",
  "message": "Hello from Salesforce!"
}
```

## Notes
- For production, use environment variables and app passwords for security.
- Free email providers (like Gmail) may have sending limits. For higher volume, consider SendGrid or Mailgun (both have free tiers).
