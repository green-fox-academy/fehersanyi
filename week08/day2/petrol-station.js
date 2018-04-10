const car = {
  petrolLevel: 0,
  petrolCapacity: 50,
  refill(amount) {
    if (amount > 50) {
      this.petrolLevel += 50;
      station.petrolStorage = amount - 50;
    } else {
      this.petrolLevel += amount;
      station.petrolStorage = 0;
    }
  },
}

const station = {
  petrolStorage: 3000,
  provide(car) {
    car.refill(this.petrolStorage)
  }
}

console.log(car.petrolLevel);
console.log(station.petrolStorage);

station.provide(car);

console.log(car.petrolLevel);
console.log(station.petrolStorage);