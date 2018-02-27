'use strict';
const fs = require('fs');

function dechiperAll (myFile: string) {
  let myMisery: string = fs.readFileSync(myFile, 'utf-8');
  let miseryArray: any [] =  myMisery.split('\r\n');
  console.log(miseryArray.reverse());
}
try {
  dechiperAll('reverseOrder.txt');
} catch {
  console.log('dude seriously, wut...');
}