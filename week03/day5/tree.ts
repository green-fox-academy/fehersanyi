'use strict';

const canvas = document.querySelector('.main-canvas') as sTMLCanvasElement;
const ctx = canvas.getContext('2d');

const degToRad: number = Math.PI / 180
const totalDepth: number = 9;

function branch(xs: number, ys: number, xe: number, ye: number) {

  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;

  ctx.moveTo(xs, ys)
  ctx.lineTo(xe, ye)
}
 
function tree(xstart: number, ystart: number, angle: number, depth: number): void {
  if (depth !== 0) {
    let xend: number = xstart + (Math.cos(angle * degToRad) * depth * 10.0)
    let yend: number = ystart + (Math.sin(angle * degToRad) * depth * 10.0)
    branch(xstart, ystart, xend, yend)
    tree(xend, yend, angle - 20, depth - 1)
    tree(xend, yend, angle + 20, depth - 1)
  }
}
 
ctx.beginPath()
tree(300, 500, -90, totalDepth)
ctx.closePath()
ctx.stroke()