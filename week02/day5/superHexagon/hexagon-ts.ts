'use strict'
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let backUpPoint1: number = 190;
let backUpPoint2: number = 200;
let originPoint: number = 190;
let originPoint2: number = 200;
let hexSize: number = 2;
function drawDaHex(x: number, y: number){
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 16, y);
  ctx.lineTo(x + Math.sqrt(2) * 16, y + Math.sqrt(2) / 2 * 16);
  ctx.lineTo(x + 16, y + Math.sqrt(2) * 16);
  ctx.lineTo(x, y + Math.sqrt(2) * 16 );
  ctx.lineTo((x - Math.sqrt(2) * 8) + 5, y + Math.sqrt(2) / 2 * 16 );
  ctx.lineTo(x, y);
  ctx.stroke();
}
for(let j: number = 0; j < hexSize; j++) {
  for(let i: number = 0; i < hexSize + 1; i++){
    drawDaHex(originPoint, originPoint2);
    originPoint -= (Math.sqrt(2) * 10 + 15);
    originPoint2 += Math.sqrt(2) / 2 * 20;
  }
  originPoint = backUpPoint1 + (40 * (j + 0.75));
  originPoint2 = backUpPoint2 + ((Math.sqrt(2) / 2 * 20) + (Math.sqrt(2)));
}