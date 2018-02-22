'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function purpleLines(xStart: number, yStart: number, xEnd: number, yEnd: number) {
    ctx.strokeStyle = 'purple';
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
}


function greenLines(xStart: number, yStart: number, xEnd: number, yEnd: number) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
}

let horStart: number;
let verStart: number;
let horEnd: number;
let verEnd: number;

// lila csikok
for(let i: number = 0; i < 18; i++) {
    horStart = 370 - ((i * 20) - 2);
    verStart = 0;
    horEnd = 400;
    verEnd = 370 - ((i * 20) - 2);


    purpleLines(horStart, verStart, horEnd, verEnd);
}

// yold csikok
for(let i: number = 0; i < 18; i++) {
    horStart = 0;
    verStart = 370 - ((i * 20) - 2);
    horEnd = 370 - ((i * 20) - 2);
    verEnd = 400;


    greenLines(horStart, verStart, horEnd, verEnd);
}