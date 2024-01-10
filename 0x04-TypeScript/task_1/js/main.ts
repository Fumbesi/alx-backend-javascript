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
