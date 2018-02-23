'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let originPoint1: number = 200;
let originPoint2: number = 200;
let rowNumber: number = 30;
function drawThatTriangle (x: number, y: number) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x-5, y+Math.sqrt((2)/2)*10);
        ctx.lineTo(x+5,y+Math.sqrt((2)/2)*10);
        ctx.lineTo(x, y);
        ctx.stroke();
}
drawThatTriangle(originPoint1, originPoint2);
for(let j: number = 0; j < rowNumber; j++) {
  for(let i: number = 0; i < rowNumber - j; i++) {
    drawThatTriangle(originPoint1, originPoint2);
    originPoint1 -= 5;
    originPoint2 += Math.sqrt((2)/2)*10;
  }
  originPoint1 = 205 + 5*j;
  originPoint2 = (200 + Math.sqrt((2)/2)*10) + (j *Math.sqrt((2)/2)*10);
}