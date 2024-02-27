// 2-read_file.js

const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into rows
    const rows = data.trim().split('\n');

    // Initialize counters
    let totalStudents = 0;
    let csStudents = 0;
    let sweStudents = 0;
    let csList = [];
    let sweList = [];

    // Iterate through each row
    rows.forEach(row => {
      // Skip empty lines
      if (row.trim() === '') {
        return;
      }

      // Parse CSV values
      const [firstname, lastname, age, field] = row.split(',');

      // Check if the field is CS or SWE
      if (field === 'CS') {
        csStudents++;
        csList.push(firstname);
      } else if (field === 'SWE') {
        sweStudents++;
        sweList.push(firstname);
      }

      totalStudents++;
    });

    // Log the results
    console.log(`Number of students: ${totalStudents}`);
    console.log(`Number of students in CS: ${csStudents}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents}. List: ${sweList.join(', ')}`);

  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
