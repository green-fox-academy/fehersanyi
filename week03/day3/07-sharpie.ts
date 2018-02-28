'use strict';

class Sharpie {
  color: string;
  width: number;
  inkAmount: number = 100;

  constructor(color, width) {
    this.color = color;
    this.width = width;
  }
  use() {
    this.inkAmount--;
  }
}

let ceruza = new Sharpie('red', 0.5);

ceruza.use();
console.log(ceruza.inkAmount);