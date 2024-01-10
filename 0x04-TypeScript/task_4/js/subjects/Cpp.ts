namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number; // Optional attribute for teaching experience in C
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      const teacher = this.teacher;

      if (teacher && teacher.experienceTeachingC === undefined) {
        return 'No available teacher';
      } else if (teacher) {
        return `Available Teacher: ${teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
