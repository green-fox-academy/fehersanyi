'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function stepByStep (x: number, y: number) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, y, 10, 10);
}
let hor: number = 10;
let ver: number = 10;
for(let i:number = 0; i < 20; i++) {
    hor = i * 10;
    ver = i * 10;
    stepByStep(hor, ver);
}