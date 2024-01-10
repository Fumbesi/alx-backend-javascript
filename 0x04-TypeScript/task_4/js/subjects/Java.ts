namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number; // Optional attribute for teaching experience in Java
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      const teacher = this.teacher;

      if (teacher && teacher.experienceTeachingJava === undefined) {
        return 'No available teacher';
      } else if (teacher) {
        return `Available Teacher: ${teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
