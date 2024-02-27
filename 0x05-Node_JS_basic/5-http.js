// 5-http.js

const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  // Set the response header with content type
  res.setHeader('Content-Type', 'text/plain');

  // Parse the URL
  const url = new URL(req.url, `http://${req.headers.host}`);

  // Handle different routes
  if (url.pathname === '/') {
    // Handle root route
    res.end('Hello Holberton School!\n');
  } else if (url.pathname === '/students') {
    // Handle /students route

    // Get the database file name from command line arguments
    const [, , databaseFileName] = process.argv;

    // Call the countStudents function with the database file name
    countStudents(databaseFileName)
      .then(() => {
        // This is the list of our students
        res.end('This is the list of our students\n');
      })
      .catch((error) => {
        // Log the error if there's an issue reading the database
        console.error(error.message);
        res.end('Internal Server Error\n');
      });
  } else {
    // Handle other routes
    res.end('Not Found\n');
  }
});

// Listen on port 1245
app.listen(1245);

// Export the app for external use
module.exports = app;

