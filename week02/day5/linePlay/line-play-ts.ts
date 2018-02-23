'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function purpleLines(xStart: number, yStart: number, xEnd: number, yEnd: number) {
    ctx.strokeStyle = 'purple';
    ctx.beginPath();
    ctx.moveTo(xStart/4, yStart/4);
    ctx.lineTo(xEnd/4, yEnd/4);
    ctx.stroke();
}


function greenLines(xStart: number, yStart: number, xEnd: number, yEnd: number) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(xStart/4, yStart/4);
    ctx.lineTo(xEnd/4, yEnd/4);
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
    purpleLines(horStart+400, verStart+400, horEnd+400, verEnd+400);
    purpleLines(horStart+800, verStart+800, horEnd+800, verEnd+800);
    purpleLines(horStart+1200, verStart+1200, horEnd+1200, verEnd+1200);
    purpleLines(horStart+400, verStart, horEnd+400, verEnd);
    purpleLines(horStart+400, verStart+1200, horEnd+400, verEnd+1200);
    purpleLines(horStart+800, verStart, horEnd+800, verEnd);
    purpleLines(horStart+800, verStart+400, horEnd+800, verEnd+400);
    purpleLines(horStart+1200, verStart, horEnd+1200, verEnd);
    purpleLines(horStart+1200, verStart+400, horEnd+1200, verEnd+400);
    purpleLines(horStart+1200, verStart+800, horEnd+1200, verEnd+800);
    purpleLines(horStart, verStart+400, horEnd, verEnd+400);
    purpleLines(horStart, verStart+800, horEnd, verEnd+800);
    purpleLines(horStart, verStart+1200, horEnd, verEnd+1200);
    purpleLines(horStart+400, verStart+800, horEnd+400, verEnd+800);
    purpleLines(horStart+800, verStart+1200, horEnd+800, verEnd+1200);
}

// zold csikok
for(let i: number = 0; i < 18; i++) {
    horStart = 0;
    verStart = 370 - ((i * 20) - 2);
    horEnd = 370 - ((i * 20) - 2);
    verEnd = 400;


    greenLines(horStart, verStart, horEnd, verEnd);
    greenLines(horStart+400, verStart+400, horEnd+400, verEnd+400);
    greenLines(horStart+800, verStart+800, horEnd+800, verEnd+800);
    greenLines(horStart+1200, verStart+1200, horEnd+1200, verEnd+1200);
    greenLines(horStart+400, verStart, horEnd+400, verEnd);
    greenLines(horStart+400, verStart+1200, horEnd+400, verEnd+1200);
    greenLines(horStart+800, verStart, horEnd+800, verEnd);
    greenLines(horStart+800, verStart+400, horEnd+800, verEnd+400);
    greenLines(horStart+1200, verStart, horEnd+1200, verEnd);
    greenLines(horStart+1200, verStart+400, horEnd+1200, verEnd+400);
    greenLines(horStart+1200, verStart+800, horEnd+1200, verEnd+800);
    greenLines(horStart, verStart+400, horEnd, verEnd+400);
    greenLines(horStart, verStart+800, horEnd, verEnd+800);
    greenLines(horStart, verStart+1200, horEnd, verEnd+1200);
    greenLines(horStart+400, verStart+800, horEnd+400, verEnd+800);
    greenLines(horStart+800, verStart+1200, horEnd+800, verEnd+1200);
}