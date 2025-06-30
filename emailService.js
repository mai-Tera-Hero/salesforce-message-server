const nodemailer = require('nodemailer');

// Configure your email transport (using Gmail for demo; use env vars in production)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // set in Render environment
    pass: process.env.EMAIL_PASS  // set in Render environment
  }
});

async function sendEmail(recipient, message) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: recipient,
      subject: '🚨🚨🚨'+message,
      text: message
    });
    return { success: true, info: 'Email sent.' };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

module.exports = { sendEmail };
