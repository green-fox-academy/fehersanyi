'use strict';

import { Person, Student, Mentor, Sponsor } from './people';

class Cohort {
  name: string;
	students: Student[] = [];
	mentors: Mentor[] = [];

	constructor(name: string) {
		this.name = name;
	}

	addStudent(student: Student) {
		this.students.push(student);
	}
	addMentor(mentor: Mentor) {
		this.mentors.push(mentor);
	}
	cohortInfo() {
		return `The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`
	}
}

let ace = new Cohort('ACE');
let bazsi = new Student('Bazsi', 30, 'male')
ace.addStudent(bazsi);
let bence = new Mentor('Bence', 27, 'male');
ace.addMentor(bence);
console.log(ace.cohortInfo());


let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);


for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  console.log(person.introduce());
  console.log(person.getGoal());
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
console.log(awesome.cohortInfo());