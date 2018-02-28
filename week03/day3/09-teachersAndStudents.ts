'use strict';

class Student {
  learn() {
    console.log('now i know!');
  }
  question(teacher) {
    teacher.answer();
  }
}

class Teacher {
  teach(student) {
    student.learn();
  }
  answer() {
    console.log('this and that');
  }
}

let pistike = new Student;
let marika = new Teacher;

console.log(pistike.question(marika));
console.log(marika.teach(pistike));