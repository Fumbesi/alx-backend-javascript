import fs from 'fs';

const readDatabase = (path) => new Promise((res, rej) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      rej(err);
    } else {
      let minus = 1;
      let result = '';
      // eslint-disable-next-line  no-param-reassign
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
      result += `Number of students: ${data.length - minus}\n`;
      let i = 0;
      for (const key in fieldlist) {
        if (Object.prototype.hasOwnProperty.call(fieldlist, key)) {
          result += `Number of students in ${key}: ${fieldlist[key].length}. List: ${fieldlist[key].join(', ')}`;
          // eslint-disable-next-line no-continue
          if (i === 1) continue;
          result += '\n';
          i += 1;
        }
      }
      res({ result, fieldlist });
    }
  });
});

export default readDatabase;
module.exports = readDatabase;
