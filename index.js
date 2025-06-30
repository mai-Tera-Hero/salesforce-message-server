const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/send-message', (req, res) => {
  const { recipient, message } = req.body;
  if (!recipient || !message) {
    return res.status(400).json({ error: 'Recipient and message are required.' });
  }
  console.log('Received from Salesforce:', { recipient, message });
  res.json({ success: true, info: 'Data received and logged.' });
});

app.get('/', (req, res) => {
  res.send('Server is running.');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
