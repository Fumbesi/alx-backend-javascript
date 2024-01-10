// Assuming the necessary imports are in place

// Create and export constant cpp for Cpp Subjects
export const cpp = new Subjects.Cpp();

// Create and export constant java for Java Subjects
export const java = new Subjects.Java();

// Create and export constant react for React Subjects
export const react = new Subjects.React();

// Create and export one Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher: Subjects.Teacher = {
  experienceTeachingC: 10,
};

// For Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
