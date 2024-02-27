// 7-http_express.js

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

// Set up a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Set up a route for the /students endpoint
app.get('/students', (req, res) => {
  // Get the database file name from command line arguments
  const [, , databaseFileName] = process.argv;

  // Call the countStudents function with the database file name
  countStudents(databaseFileName)
    .then(() => {
      // This is the list of our students
      res.send('This is the list of our students\n');
    })
    .catch((error) => {
      // Log the error if there's an issue reading the database
      console.error(error.message);
      res.status(500).send('Internal Server Error\n');
    });
});

// Listen on port 1245
const server = app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for external use
module.exports = app;

