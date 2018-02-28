'use strict';

class Station {
  gasAmount: number = 100;

  refill(car) {
    this.gasAmount -= car.capacity - car.gasAmount;
    car.addGas();
  }
}

class Car {
  gasAmount: number;
  capacity: number;

  addGas() {
    this.gasAmount = this.capacity;
  }

  constructor(gasAmount = 0, capacity = 100) {
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }
}

let myCar = new Car();
let mol = new Station;
console.log(mol.gasAmount);
mol.refill(myCar);
console.log(myCar.gasAmount);
console.log(mol.gasAmount);
