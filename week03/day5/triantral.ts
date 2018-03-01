'use strict';

const canvas = document.querySelector('.main-canvas') as sTMLCanvasElement;
const ctx = canvas.getContext('2d');

function triantal(x: number, y: number, w: number, h: number) {

  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - w, y + h);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y);
  ctx.stroke();

  if (h > 5) {
    triantal(x - w, y, w / 2 , h / 2);
    triantal(x + w, y, w / 2 , h / 2);
    triantal(x, y + h, w / 2 , h / 2);
  }
  
}

triantal(300, 20, 100, Math.sqrt((2)/2)*150)

