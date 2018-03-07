'use strict';

export class Person {
  name: string;
  age: number;
	gender: string;

	constructor(
		name: string = 'Jane Doe', 
		age: number = 30, 
		gender: string = 'female') 
		{

		this.name = name;
		this.age = age;
		this.gender = gender;
	}

  introduce () {
	return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`;
	}
	
	getGoal() {
		return 'My goal is, Live for the moment!';
	}
}

export class Student extends Person {

	previousOrganization: string;
	skippedDays: number = 0;

	constructor(name?: string, age?: number, gender?: string, previousOrganization?: string, skippedDays?: number) {
		super(name, age, gender);
		this.previousOrganization = previousOrganization;
		this.skippedDays = skippedDays;
		}
	getGoal() {
		return 'Be a junior software developer.'
	}
	introduce() {
		return 'Hy, I\'m ' + this.name + ' a ' + this.age 
		+ ' year old ' + this.gender + ' from ' 
		+ this.previousOrganization + ' who skipped ' + this.skippedDays + ' days.';
	}

}

export class Mentor extends Person {
	level: string;

	constructor(name?: string, age?: number, gender?: string, level?: string) {
		super(name, age, gender);
		this.level = level;
	}
	getGoal() {
		return 'Educate brilliant junior software developers.';
	}
	introduce() {
		return `Hy, I'm  ${this.name} a ${this.age} year old  ${this.gender}  level  ${this.level}  mentor`;
	}
}

export class Sponsor extends Person {
	company: string;
	hiredStudents: number = 0;

	constructor(name?: string, age?: number, gender?: string, company?: string, hiredStudents?: number) {
		super(name, age, gender);
		this.company = company;
		this.hiredStudents = hiredStudents;
	}
	introduce() {
		return 'Hy, i\'m ' + this.name + ' a ' + this.age + ' years old ' + this.gender + ' who represents ' + this.company + ' and hired ' + this.hiredStudents + 'students so far';
	}
	hire() {
		this.hiredStudents++;
	}
	getGoal() {
		return 'Hire brilliant software developers';
	}
}

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

//student.skippedDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}