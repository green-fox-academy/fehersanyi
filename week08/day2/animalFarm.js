function createAnimal() {
  this.hunger = 5;
  this.thirst = 5;
  this.eat = function () {
    this.hunger--;
  };
  this.drink = function () {
    this.thirst--;
  };
  this.play = function () {
    this.hunger++;
    this.thirst++;
  };
};

function createFarm(slots) {

  this.slots = slots;
  this.animals = [];


  this.breed = function () {
    if (this.animals.length < this.slots) {
      let sheep = new createAnimal();
      this.animals.push(sheep);
    };
  };

  while (this.animals.length < this.slots) {
    this.breed();
  };

  this.slaughter = function () {
    this.animals.splice(1, 1);
  };

  this.report = function () {
    if (this.animals.length <= 0) {
      return `The farm has ${this.animals.length} sheep, we are bankrupt`;
    } else if (this.animals.length <= this.slots) {
      return `The farm has ${this.animals.length} sheeps, we are ok`;
    } else if (this.animals.length > this.slots) {
      return `The farm has ${this.animals.length} sheeps, we are full`;
    }
  };

  this.progress = function () {
    this.animals.forEach(e => {
      if (Math.random() > 0.5) {
        switch (Math.floor(Math.random() * 2)) {
          case 0:
            e.eat();
            break;

          case 1:
            e.drink();
            break;

          case 2:
            e.play();
            break;
        }
      }
    });
    this.breed();
    this.slaughter();
    console.log(this.report());
  }
};

const sheepFarm = new createFarm(20);
console.log(sheepFarm.animals);
sheepFarm.progress();