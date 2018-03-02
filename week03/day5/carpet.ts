'use strict';

const canvas = document.querySelector('.main-canvas') as sTMLCanvasElement;
const ctx = canvas.getContext('2d');

function demCarpet(x: number, y: number, s: number) {

//ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;

  ctx.fillRect(x, y, s, s)

  if(s > 5) {
    //ez jo
    demCarpet(x - (2 * s / 3), y / 3, s / 3);
    demCarpet((x * 3 + s) / 3, y / 3, s / 3);
    demCarpet((x + s + (s / 3)), y / 3, s / 3);
    demCarpet(x - (2 * s / 3), y + s / 3, s / 3);
    demCarpet( x + s + (s / 3), y + s / 3, s / 3);
    demCarpet(x - (2 * s / 3), y + s + (s / 3), s / 3);
  }
}
demCarpet(200, 200, 200)