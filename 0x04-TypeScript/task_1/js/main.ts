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