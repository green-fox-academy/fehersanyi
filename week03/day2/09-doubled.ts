'use strict';
const fs = require('fs');

let inFileString: string = fs.readFileSync('duplicated-chars.txt', 'utf-8');
let infileArray: string[] = inFileString.split('');
let dechipered: string[] = [];
function dechiperIt (myArray) {



for(let i: number = 0; i < myArray.length; i++) {
  if( i % 2 === 0) {
    dechipered.push(myArray[i]);
  }
}
fs.writeFileSync('dechipered.txt', dechipered.join(''));
}
try {
dechiperIt(infileArray)
} catch {
  console.log('there is no such file.')
}