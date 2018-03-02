'use strict';

const canvas = document.querySelector('.main-canvas') as sTMLCanvasElement;
const ctx = canvas.getContext('2d');



function gridDatSquare(x: number, y: number, s: number, lw: number) {
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  ctx.lineWidth = lw;
  ctx.strokeRect(x, y, s, s);

  if( s > 10) {
    gridDatSquare(x - s / 4, y - s / 4, s - (s / 2), lw / 2);
    gridDatSquare(x + s / 4 * 3, y + s / 4 * 3, s - (s / 2), lw / 2);
    gridDatSquare(x + s / 4 * 3, y - s / 4, s - (s / 2), lw / 2);
    gridDatSquare(x - s / 4,  y + s / 4 * 3, s - (s / 2), lw / 2);
  }
}
gridDatSquare(150, 150, 300, 10);