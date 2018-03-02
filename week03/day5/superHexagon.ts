'use strict';

const canvas = document.querySelector('.main-canvas') as sTMLCanvasElement;
const ctx = canvas.getContext('2d');

function superHexagon(x, y, s) {

ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;  

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x + s, y);
ctx.lineTo(x + s * 1.5, y + s * Math.sqrt(3) / 2);
ctx.lineTo(x + s, y + s * Math.sqrt(3));
ctx.lineTo(x, y + s * Math.sqrt(3));
ctx.lineTo(x - s / 2, y + s * Math.sqrt(3) / 2);
ctx.lineTo(x, y);
ctx.stroke();

if(s > 10) {
  superHexagon(x, y, s / 3);
  superHexagon(x + s / 3 * 2, y, s / 3);

  superHexagon(x - s / 3, y + s / 1.75, s / 3);
  superHexagon(x + s / 3 * 3, y + s / 1.75, s / 3);

  superHexagon(x, y + s + s / 6.5, s / 3);
  superHexagon(x + s / 3 * 2, y + s + s / 6.5, s / 3);
}

}

superHexagon(150, 50, 300);