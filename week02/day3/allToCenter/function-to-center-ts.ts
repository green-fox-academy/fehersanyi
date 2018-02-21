'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawThemLines( x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();
}
let hor: number = 0;
let ver: number = 0;
    for (let i: number = 0; i <= 30; i++) {
        for (let j: number = 0; j <= 20; j++) {
            if (i == 0 || i == 30 || j == 0 || j == 20){
        hor = i * 20;
        ver = j * 20;
        drawThemLines(hor, ver);
            }
        }
    }
