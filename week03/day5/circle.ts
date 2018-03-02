'use strict';

const canvas = document.querySelector('.main-canvas') as sTMLCanvasElement;
const ctx = canvas.getContext('2d');

function circle(x: number, y: number, size: number, d: number, thisIsPI: number) {

  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;  

  ctx.beginPath();
  ctx.arc(x, y, size, d, thisIsPI);
  ctx.stroke();

  if(size > 10) {
    circle(x, y - size / 2, size / 2, d, thisIsPI);
    circle(x - size * Math.sqrt(3) / 4, y + size / 4, size / 2, d, thisIsPI);
    circle(x + size * Math.sqrt(3) / 4, y + size / 4, size / 2, d, thisIsPI);

  }
}

circle(300, 300, 300, 0, Math.PI * 2);