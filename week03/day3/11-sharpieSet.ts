'use strict';

class Sharpie {
  color: string;
  width: number;
  inkAmount: number = 100;

  constructor(color?, width?) {
    this.color = color;
    this.width = width;
  }
  use() {
    this.inkAmount--;
  }
}
let countOfUsables = 0;
class SharpieSet {
  private pens: Sharpie[] = [];
  
  constructor(){}

  add(pen: Sharpie) {
    this.pens.push(pen);
  }

  countUsable(pen: Sharpie) {
    if(pen.inkAmount > 0) {
      countOfUsables++;
    }
    return countOfUsables;
  }

  removeTrash(pen: Sharpie) {
    if(pen.inkAmount < 1) {
      console.log(pen.color + ' is emptied, throw it away!');
    }
  } 
  get demPens() {
    return this.pens;
  }
}

let sharpieset = new SharpieSet();

let biro = new Sharpie('blue', 0.3);
let filtz = new Sharpie('black', 4);
sharpieset.add(biro);
sharpieset.add(filtz);
filtz.inkAmount = 1;
filtz.use();
sharpieset.removeTrash(filtz);
console.log(sharpieset);
console.log(sharpieset.countUsable(filtz));
