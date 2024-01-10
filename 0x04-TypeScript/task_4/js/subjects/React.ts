namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number; // Optional attribute for teaching experience in React
  }

  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      const teacher = this.teacher;

      if (teacher && teacher.experienceTeachingReact === undefined) {
        return 'No available teacher';
      } else if (teacher) {
        return `Available Teacher: ${teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
