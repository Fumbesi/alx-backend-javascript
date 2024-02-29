import readDatabase from '../utils';

const majorParam = ['CS', 'SWE'];

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((result) => {
        response.statusCode = 200;
        response.send(`This is the list of our students\n${result.result}`);
      })
      .catch((err) => {
        response.statusCode = 500;
        response.send(err);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!majorParam.includes(major)) {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2])
      .then((result) => {
        response.statusCode = 200;
        response.send(`List: ${result.fieldlist[major].join(', ')}`);
      })
      .catch((err) => {
        response.statusCode = 500;
        response.send('Cannot load the database');
        console.log(err);
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
