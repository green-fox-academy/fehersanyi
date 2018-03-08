'use strict';

export class Sharpie {
  color: string;
  width: number;
  inkAmount: number = 100;

  constructor(color: string = 'blue', width?: number) {
    this.color = color;
    this.width = width;
  }
  use() {
    this.inkAmount--;
  }
}

let ceruza = new Sharpie('red', 0.5);

ceruza.use();
//console.log(ceruza.inkAmount);