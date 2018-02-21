'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

function checkerBoard(x: number, y: number) {
    ctx.fillRect(x, y, 10, 10);
}
let hor: number = 10;
let ver: number = 10;
for (let i: number = 0; i < 40; i++) {
    for(let j: number = 0; j < 60; j++){
        if (i % 2 === j % 2) {
            checkerBoard(hor*j, ver*i);
        }
    }
}