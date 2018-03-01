'use strict'

const canvas = document.querySelector('.main-canvas') as sTMLCanvasElement;
const ctx = canvas.getContext('2d');



function drawDemHexagons(x: number, y: number, s: number) {
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

  if(s > 10){
    drawDemHexagons(x, y, s / 2)
    drawDemHexagons(x, y + s * Math.sqrt(3) / 2, s / 2)
    drawDemHexagons(x + s * 0.75, y + s * Math.sqrt(3) / 4, s / 2)
  }


}

  drawDemHexagons(150, 50, 300)
