'use strict';

const canvas = document.querySelector('.main-canvas') as sTMLCanvasElement;
const ctx = canvas.getContext('2d');

// bakground
ctx.fillStyle = 'yellow';
ctx.fillRect(0, 0, 600, 600);

// rect function
function drawMe(x: number, y: number, s: number) {
  
    // top
    ctx.strokeRect(x + s, y, s, s);

    //bottom
    ctx.strokeRect(x + s, y + s * 2, s, s);

    // right
    ctx.strokeRect(x, y + s, s, s);

    // left
    ctx.strokeRect(x + s * 2, y + s, s, s);

     if (s > 0.5 ){
     drawMe(x + s, y, s / 3);
     drawMe(x , y + s, s / 3);
     drawMe(x + s * 2 , y + s, s / 3);
     drawMe(x + s, y + s * 2, s / 3);
    }
  }
drawMe(0, 0, 200);