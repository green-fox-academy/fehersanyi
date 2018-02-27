'use strict';
const fs = require('fs');

function ticTacResult (fileName: string) {
  let c: number[] = [];
  fs.readFileSync(fileName, 'utf-8').split('').forEach(e => {
  if (e === 'O') {
    c.push(0);
  } else if (e === 'X') {
    c.push(1)
  } else if (e === ' ') {
    c.push(10);
  }
}
);
  if (c[0] + c[1] + c[2] === 0 ||
     c[3] + c[4] + c[5] === 0 || 
     c[6] + c[7] + c[8] === 0 || 
     c[0] + c[3] + c[6] === 0 || 
     c[1] + c[4] + c[7] === 0 || 
     c[2] + c[5] + c[8] === 0 || 
     c[0] + c[4] + c[8] === 0 || 
     c[2] + c[4] + c[6] === 0) {
    return 'O';
  } else if (
    c[0] + c[1] + c[2] === 3 || 
    c[3] + c[4] + c[5] === 3 || 
    c[6] + c[7] + c[8] === 3 || 
    c[0] + c[3] + c[6] === 3 || 
    c[1] + c[4] + c[7] === 3 || 
    c[2] + c[5] + c[8] === 3 || 
    c[0] + c[4] + c[8] === 3 || 
    c[2] + c[4] + c[6] === 3) {
    return 'X';
  } else {
    return 'Draw'
  }
}
try {
console.log(ticTacResult('draw.txt'));
} catch {
  console.log('sorry but there is no such file');
 }try {
  console.log(ticTacResult('win-o.txt'));
  } catch {
    console.log('sorry but there is no such file');
  }
try {
  console.log(ticTacResult('win-x.txt'));
  } catch {
    console.log('sorry but there is no such file');
  }