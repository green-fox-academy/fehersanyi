'use strict';

const canvas = document.querySelector('.main-canvas') as sTMLCanvasElement;
const ctx = canvas.getContext('2d');

function kochLine(x: number, y: number, w: number, h: number) {

  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;  
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - w, y + h);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y);
  ctx.stroke();

  if(w > 10) {
    kochLine(x - w, y + w / 2, w / 2, h / 2);
  }

}

kochLine(300, 20, 100, Math.sqrt((2)/2)*150);