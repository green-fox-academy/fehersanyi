'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]
function drawThemGood(x: number, y: number, s:number) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, y, s, s)
    ctx.stroke();
}
let hor: number = 5;
let ver: number = 5;
let bdy: number = 5;
for (let i: number = 0; i < 6; i++) {
    hor += hor;
    ver += ver;
    bdy *= 2;
    drawThemGood(hor, ver, bdy)
}