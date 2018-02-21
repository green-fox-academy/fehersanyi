'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.
let hor: number = 0;
let ver: number = 0;
let h: number = 0;
let w: number = 0;
let c: string[] = ['blue', 'green', 'red', 'purple']
for (let i: number = 0; i < 4; i++) {
    hor = hor * i + 10;
    ver = ver * i + 10;
    h = h * i + 10;
    w = w * i + 10;
    ctx.fillStyle = c[i];
ctx.fillRect(hor, ver, h, w);
}