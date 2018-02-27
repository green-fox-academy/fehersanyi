'use strict'
const fs = require('fs');

function grandDechiperer (fileName) {
  let decriptedMessege: any []= []; 
  let myMisery: string = fs.readFileSync(fileName, 'utf-8');
  let lineChars: any[] = [];
  let miseryArray: any[] = myMisery.split('');
  let finalString = '';
  for(let i: number = 0; i < miseryArray.length; i++) {
    if (miseryArray[i] === ' ') {
      finalString += ' ';
    } else {
      let charCode =miseryArray[i].charCodeAt();
      finalString += String.fromCharCode(charCode - 1);
    }
  }


  // decriptedMessege = decriptedMessege.map(decriptedMessege => decriptedMessege - 1);
  // for(let i = 0; i < decriptedMessege.length; i++) {

  // }
  fs.writeFileSync('decodedText.txt', finalString);
 // console.log(finalString);
}
grandDechiperer('encodedFile.txt');