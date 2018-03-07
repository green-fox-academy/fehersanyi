'use strict';
let lineCount: number = 8;
for (let i: number = 1; i <= lineCount; i++) {
  let star: string = '';
  for (let j: number = 1; j <= lineCount; j++) {
    if ((i % 2) == 0 && (j % 2) !== 0) {
      star += '*';
    } else if ((i % 2) !== 0 && (j % 2) === 0) {
        star += '*';
    } else if ((i % 2) === 0 && (j % 2) === 0) {
        star += ' ';
    } else {
        star += ' ';
    }      
  }  
console.log(star);
}