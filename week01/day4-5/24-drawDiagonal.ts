'use strict';
let lineCount: number = 6;
for (let i: number = 1; i <= lineCount; i++) {
  let star: string = '';
  for (let j: number = 1; j <= lineCount; j++) {
    if (i === 1 || i === lineCount || j === 1 || j === lineCount){
      star += '%';
    } else if (i === j) {
        star += '%';
    } else if (j > 1 || j < lineCount) {
        star += ' ';
    } 
  }
console.log(star);
}
