const fs = require('fs');

module.exports = function countStudents(path) {
  return new Promise((res, rej) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        rej(new Error('Cannot load the database'));
      } else {
        let minus = 1;
        // eslint-disable-next-line no-param-reassign
        data = data.split('\n');
        const fieldlist = {};
        for (let i = 1; i < data.length; i += 1) {
          const firstName = data[i].split(',')[0];
          const field = data[i].split(',')[3];
          if (!Object.prototype.hasOwnProperty.call(fieldlist, field)) {
            if (field === undefined) {
              minus += 1;
              // eslint-disable-next-line no-continue
              continue;
            }
            fieldlist[field] = [];
          }
          fieldlist[field].push(firstName);
        }
        console.log(`Number of students: ${data.length - minus}`);
        for (const key in fieldlist) {
          if (Object.prototype.hasOwnProperty.call(fieldlist, key)) {
            console.log(`Number of students in ${key}: ${fieldlist[key].length}. List: ${fieldlist[key].join(', ')}`);
          }
        }
        res();
      }
    });
  });
};
