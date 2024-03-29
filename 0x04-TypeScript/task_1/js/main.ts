interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any additional attribute
}

class TeacherClass implements Teacher {
  readonly fullTimeEmployee: boolean;

  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    fullTimeEmployee: boolean,
    public readonly location: string,
    optionalParams: Partial<Teacher> = {}
  ) {
    this.fullTimeEmployee = fullTimeEmployee;
    Object.assign(this, optionalParams);
    Object.freeze(this); // Prevent modification after initialization
  }
}

// Creating a Teacher instance
const teacher3 = new TeacherClass('John', 'Doe', false, 'London', {
  contract: false,
});

console.log(teacher3);

interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any additional attribute
}

interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${firstLetter}. ${fullLastName}`;
};

// Example usage
const result = printTeacher('John', 'Doe');
console.log(result); // Output: J. Doe


// Interface for the StudentClass constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface for the StudentClass instance methods
interface StudentMethods {
  workOnHomework(): string;
  displayName(): string;
}

// Interface for the StudentClass
interface StudentClass extends StudentMethods {}

// Implementing the StudentClass
class StudentClass implements StudentMethods {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass('Alice', 'Smith');
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: Alice
