'use strict';

abstract class Animal {
  name: string;
  age: number;
  gender: string;
  belly: number;
  tiredness: number;

  getGender() {
    return this.gender;
  }
  getAge() {
    return this.age;
  }
  getName() {
    return this.name;
  }
  breed() {

  }
  eat() {
    return this.belly++;
  }
  poop() {
    return this.belly--;
  }
  sleep() {
    return this.tiredness--;
  }
}

class Mammal extends Animal {
  name: string;
  constructor(name: string) {
    super()
    this.name = name;
  }
  breed() {
  return 'pushing miniature versions out.';
  }
}

class Bird extends Animal {
  name: string;
  constructor(name: string) {
    super()
    this.name = name;
  }
  breed() {
    return 'lays eggs';
  }
}

class Reptile extends Animal {
  name: string;
  constructor(name: string) {
    super()
    this.name = name;
  }
  breed() {
    return 'lays eggs.';
  }
}

export { Animal, Mammal, Bird, Reptile };