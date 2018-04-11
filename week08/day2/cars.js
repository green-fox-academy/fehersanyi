'use strict';
// 1st
// Call the ride method of the volvo, with 42 as a parameter
let volvo = {
  type: "Volvo",
  fuel: 23,
  consumption: 0.06,
  kms: 43000,
  ride: function (km) {
    this.kms += km;
    this.fuel -= km * this.consumption; 
  }
};

let ferrari = {
  type: "Ferrari",
  fuel: 0,
  consumption: 0.12,
  kms: 9000,
  ride: function (km) {
    this.kms += km;
    this.fuel -= km * this.consumption; 
  }
};

function refuel(liters) {
  this.fuel += liters
}

let tesla = {
  type: 'Tesla',
  battery: 80,
  kms: 0,
  consumption: 2,
  ride: (km) => {
    this.kms += km;
    this.battery -= this.consumption;
  }
}

tesla.ride(36);
console.log(tesla.kms);
console.log(tesla.battery);
volvo.ride(42);
console.log(ferrari.fuel);
refuel.bind(ferrari)(52);
console.log(ferrari.fuel);