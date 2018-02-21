'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

ctx.fillStyle = "blue";
ctx.fillRect(300, 40, 50, 20);

ctx.fillStyle = "green";
ctx.fillRect(500, 10, 69, 69);

ctx.fillStyle = "red";
ctx.fillRect(295, 195, 10, 10);

ctx.fillStyle = "purple";
ctx.fillRect(222, 44, 100, 100);