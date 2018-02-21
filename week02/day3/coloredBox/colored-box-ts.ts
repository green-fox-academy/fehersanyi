'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.strokeStyle = "#C4232B";
ctx.moveTo(10, 10);
ctx.lineTo(30, 10);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "#73612D";
ctx.moveTo(30, 10);
ctx.lineTo(30, 30);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(30, 30);
ctx.strokeStyle = "#3437D5";
ctx.lineTo(10, 30);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(10, 30);
ctx.strokeStyle = "#79B265";
ctx.lineTo(10, 10);
ctx.stroke();