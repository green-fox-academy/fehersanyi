'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)
ctx.fillStyle= 'black'
ctx.fillRect(0, 0, 600, 400)



function makeItStarry (x: number, y: number, s: number, c: string) {
    ctx.fillStyle = c;
    ctx.fillRect(x, y, s, s);
}
let starColor: string [] = ['#d3d3d3', '#bdbdbd', '#a8a8a8', '#939393', '#7e7e7e', '#696969']
let hor: number = 0;
let ver: number = 0;
let siz: number;
let col: string;
for(let i: number = 0; i < Math.random() * 100 + 100; i++ ){
    hor = (Math.random() * 10) * 60;
    ver = (Math.random() * 10) * 40;
    siz = (Math.random() * 10) + 5;
    col = starColor[Math.floor(Math.random() * starColor.length)];

    makeItStarry(hor, ver, siz, col);
}