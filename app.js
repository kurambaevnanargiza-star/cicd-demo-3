const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Salom! CI/CD demo ilovasi ishlayapti', version: '1.0.0' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'fail' });
});

module.exports = app;
