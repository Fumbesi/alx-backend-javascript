// 4-http.js

const http = require('http');

const app = http.createServer((req, res) => {
  // Set the response header with content type
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello Holberton School!\n');
});

// Listen on port 1245
app.listen(1245);

// Export the app for external use
module.exports = app;

