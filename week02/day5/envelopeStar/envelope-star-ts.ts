'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(200, 0);
ctx.lineTo(200, 400);
ctx.stroke();


function myGreenStar(xStart: number, yStart: number, xEnd: number, yEnd: number) {
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
}

let horStart: number;
let verStart: number;
let horEnd: number;
let verEnd: number;


//bal felso
for(let i: number = 0; i < 14; i++) {
    horStart = 200;
    verStart = 186 - (i * 14);
    horEnd = 4 + (i * 14);
    verEnd = 200;
    myGreenStar(horStart, verStart, horEnd, verEnd);
}

// jobb also
for(let i: number = 0; i < 14; i++) {
    horStart = 200;
    verStart = 214 + (i * 14);
    horEnd = 396 - (i * 14);
    verEnd = 200;
    myGreenStar(horStart, verStart, horEnd, verEnd);
}
//bal also  
for(let i: number = 0; i < 14; i++) {
    horStart = 200,
    verStart = 396 - (i * 14);
    horEnd = 186 - (i * 14);
    verEnd = 200;
    myGreenStar(horStart, verStart, horEnd, verEnd);
} 
// jobb felso
for(let i: number = 0; i < 14; i++) {
    horStart = 214 + (i * 14),
    verStart = 200;
    horEnd = 200;
    verEnd = 4 + (i * 14);
    myGreenStar(horStart, verStart, horEnd, verEnd);
}