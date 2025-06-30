const express = require('express');
const { sendEmail } = require('./emailService');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/send-message', async (req, res) => {
  const { recipient, message } = req.body;
  if (!recipient || !message) {
    return res.status(400).json({ error: 'Recipient and message are required.' });
  }
  console.log('Received from Salesforce:', { recipient, message });
  const emailResult = await sendEmail(recipient, message);
  if (emailResult.success) {
    res.json({ success: true, info: 'Data received and email sent.' });
  } else {
    res.status(500).json({ error: 'Failed to send email', details: emailResult.error });
  }
});

app.get('/', (req, res) => {
  res.send('Server is running.');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
