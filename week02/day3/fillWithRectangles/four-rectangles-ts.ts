'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

ctx.strokeStyle = "blue";
ctx.strokeRect(300, 40, 50, 20);

ctx.strokeStyle = "green";
ctx.strokeRect(500, 10, 69, 69);

ctx.strokeStyle = "red";
ctx.strokeRect(295, 195, 10, 10);

ctx.strokeStyle = "purple";
ctx.strokeRect(222, 44, 100, 100);