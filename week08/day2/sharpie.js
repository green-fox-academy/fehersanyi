// const sharpie = {
//   color: 'red',
//   width: 3,
//   inkAmount: 100,
//   use() {
//     this.inkAmount -= this.width;
//     console.log(`i draw a fractal, so ${this.inkAmount} ink left in me!`)
//   },
// }


function createSharpie(color, width) {
  return ceruza = {
    color,
    width,
    inkAmount: 100,

    use: function () {
      this.inkAmount -= this.width;
      console.log(`i draw a fractal, so ${this.inkAmount} ink left in me!`)
    }
  }
}

let mySharpie = createSharpie('red', 3);


while (mySharpie.inkAmount > mySharpie.width) {
  mySharpie.use()
}
// mySharpie.use()