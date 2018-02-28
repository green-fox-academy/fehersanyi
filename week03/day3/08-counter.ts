'use strict';

class Counter {
  integer: number = 0;

  constructor() {
    this.integer;
  }

  add() {
    this.integer++;
  }

  getValue() {
    return this.integer.toString();
  }

  resetValue() {
    this.integer = 0;
  }

}

let myCounter = new Counter();
myCounter.add();
console.log(myCounter.integer);
console.log(myCounter.getValue());
myCounter.resetValue();
console.log(myCounter.getValue());