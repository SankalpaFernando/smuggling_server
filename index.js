const express = require('express');
const app = express();
const port = 8080;

// Log every request (method + path + raw headers)
app.use((req, res, next) => {
  console.log('--- New request ---');
  console.log(`${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  next();
});

// Default route
app.get('/', (req, res) => {
  res.send('Hello from Node backend!');
});

// Example admin route (protected in real life)
app.get('/admin', (req, res) => {
  res.send('Sensitive admin area reached!');
});

// Start server
app.listen(port, () => {
  console.log(`Node backend listening on http://localhost:${port}`);
});
