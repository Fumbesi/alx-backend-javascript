// 3-get_ids_sum.js

function getStudentIdsSum(studentsList) {
  return studentsList.reduce((sum, student) => sum + student.id, 0);
}

module.exports = getStudentIdsSum;
