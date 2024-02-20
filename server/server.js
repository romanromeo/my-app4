// server/server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

module.exports = { app, PORT };
