'use strict'
const fs = require('fs');

function dechiperIt (myFile) {
let myMisery: string = fs.readFileSync(myFile, 'utf-8')
let miseryArray: any [] =  myMisery.split('\r\n');
//controll

for(let i: number = 0; i < miseryArray.length; i++) {
  miseryArray[i] = miseryArray[i].split('').reverse().join('');
}
console.log(miseryArray);

}
try {
dechiperIt('reversedLines.txt');
} catch {
  console.log('something is wrong here dude...')
}