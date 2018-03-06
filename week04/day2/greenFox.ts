'use strict';

import { Person, Student, Mentor, Sponsor } from './people';

class Cohort {
  name: string;
	students: Student[];
	mentors: Mentor[];

	addStudent(student: Student) {
		this.students.push(student);
	}
	addMentor(mentor: Mentor) {
		this.mentors.push(mentor);
	}
	info() {
		return `The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`
	}
}