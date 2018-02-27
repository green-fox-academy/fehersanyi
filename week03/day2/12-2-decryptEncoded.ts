'use strict'
const fs = require('fs');

function grandDechiperer (fileName) {

  let decriptedMessege: any []= []; 
  let myMisery: string = fs.readFileSync(fileName, 'utf-8');
  let miseryArray: any[] = myMisery.split('\r\n');
  let finalString: string [] = [];
  let lineChars: any[];

  for (let i: number = 0; i < miseryArray.length; i++) {
    lineChars = miseryArray[i].split('');
    let decodedLine: string = '';
    for ( let j: number = 0; j < lineChars.length; j++) {
      if (lineChars[j] === ' ') {
        decodedLine += ' ';
      } else {
        let charCode = lineChars[j].charCodeAt();
        decodedLine += String.fromCharCode(charCode - 1);
      }
    }
    finalString.push(decodedLine);
  }
  console.log(finalString.join('\r\n'));
}
grandDechiperer('encodedFile.txt');