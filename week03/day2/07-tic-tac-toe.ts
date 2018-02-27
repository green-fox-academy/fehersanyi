'use strict';
const fs = require('fs');

fs.writeFileSync('win-o.txt', '0');
fs.writeFileSync('win-x.txt', 'X');
fs.writeFileSync('draw.txt', 'draw');
function ticTacResult (filename: string) {
  console.log(fs.readFileSync(filename, 'utf-8'));
}
try {
ticTacResult('drag.txt');
} catch {
  console.log('sorry but there is no such file');
}