'use strict';
const fs = require('fs');

function countLines (fileName: string) {
  let text = fs.readFileSync(fileName, 'utf-8');
  let linesCount: string [] =  text.split('\n');
  return linesCount.length;
}
try {
console.log(countLines('my-file.txt'));
} catch {
  console.log(0);
}