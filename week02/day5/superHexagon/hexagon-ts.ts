'use strict'
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let originPoint: number = 190;
let originPoint2: number = 200;
function drawDaHex(x: number, y: number){
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 20, y);
  ctx.lineTo(x + 30, y + Math.sqrt(2) / 2 * 20);
  ctx.lineTo(x + 20, y + Math.sqrt(2) * 20);
 /* ctx.lineTo();
  ctx.lineTo(x, y);*/
  ctx.stroke();
}
drawDaHex(originPoint, originPoint2);