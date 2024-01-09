// 4-update_grade_by_city.js

function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const foundGrade = newGrades.find((grade) => grade.studentId === student.id);
      if (foundGrade) {
        return {
          id: student.id,
          firstName: student.firstName,
          location: student.location,
          grade: foundGrade.grade,
        };
      }
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: 'N/A',
      };
    });
}

module.exports = updateStudentGradeByCity;
