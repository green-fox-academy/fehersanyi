'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
//(Math.cbrt(3)/2)*10; //8.66
let originPoint1: number = 200;
let originPoint2: number = 200;
let startPoints: number = originPoint1;
let startPoints2: number = originPoint2;
let rowNumber: number = 5;
function drawThatTriangle (x: number, y: number) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x-5, y+Math.cbrt((3)/2)*10);
        ctx.lineTo(x+5,y+Math.cbrt((3)/2)*10);
        ctx.lineTo(x, y);
        ctx.stroke();
}
drawThatTriangle(startPoints, startPoints2);
for(let j: number = 0; j < rowNumber; j++) {
  let myCorr: number = j * rowNumber;
  for(let i: number = 0; i < rowNumber-j; i++) {
    drawThatTriangle(originPoint1, originPoint2);
    originPoint1 -= 5;
    originPoint2 += Math.cbrt((3)/2)*10;
  }
  originPoint1 += 30 - myCorr;
  originPoint2 = (200 + Math.cbrt((3)/2)*10) + (j *Math.cbrt((3)/2)*10);
}