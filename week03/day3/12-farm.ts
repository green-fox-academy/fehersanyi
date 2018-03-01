'use strict';

import {Animal} from './06-animal';

class Farm {
  private farm: Animal[] = [];

  breed() {
    if (this.farm.length < 4) {
      let newBorn = new Animal;
    }
  }

  slaughter(food: Animal) {
    let foodToBe = this.farm.indexOf(food);
    this.farm.splice(foodToBe, 1);
  }

  add(wannabeFood: Animal) {
    this.farm.push(wannabeFood);
  }

}

let chicken = new Animal;
let pig = new Animal;
let cow = new Animal;
let cock = new Animal;

let mcDonald = new Farm;

mcDonald.add(chicken);
mcDonald.add(pig);
mcDonald.add(cow);
mcDonald.add(cock);

chicken.play();
chicken.play();
console.log(chicken.hunger);

console.log(mcDonald);
mcDonald.slaughter(pig);
console.log(mcDonald);
