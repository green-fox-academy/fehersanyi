'use strict';

class Animal {
  hunger: number = 50;
  thirst: number = 50;

  constructor() {

  }

  eat() {
    this.hunger--;
  }
  drink() {
    this.thirst--;
  }
  play() {
    this.thirst++;
    this.hunger++;
  }
}

let tiger = new Animal;
tiger.play();
//console.log(tiger.hunger);

export {Animal};