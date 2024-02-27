// 6-http_express.js

const express = require('express');

const app = express();

// Set up a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Listen on port 1245
const server = app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for external use
module.exports = app;

