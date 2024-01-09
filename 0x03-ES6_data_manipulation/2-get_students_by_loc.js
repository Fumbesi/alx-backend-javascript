// 2-get_students_by_loc.js

function getStudentsByLocation(studentsList, city) {
  return studentsList.filter((student) => student.location === city);
}

module.exports = getStudentsByLocation;
