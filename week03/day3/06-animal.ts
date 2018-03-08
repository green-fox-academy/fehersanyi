'use strict';

class Animal {
  hunger: number = 50;
  thirst: number = 50;

  constructor(hunger: number = 50) {
    this.hunger = hunger;
  }

  eat() {
    this.hunger--;
  }
  drink() {
    this.thirst--;
  }
  play(): string {
    // this.thirst++;
    // this.hunger++;
    return 'yay'
  }
}

let tiger = new Animal;
tiger.play();
//console.log(tiger.hunger);

export {Animal};