'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.
function overTheRainbow (x: number, y: string) {
    ctx.fillStyle = y;
    ctx.fillRect(300, 200, x, x);
}
let mySize: number = 200;
let myColor: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
for (let i:number = 0; i <8; i++) {
    mySize -= 25;
    overTheRainbow(mySize, myColor[i]);
}