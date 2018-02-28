'use strict';
const fs = require('fs');

function dataAnalize (myFile: string) {
let lotteryData: string = fs.readFileSync(myFile, 'utf-8');
let dataLine: any [] = lotteryData.split('\r\n');
let dataEnd: any [] = [];
let cheesyHotDog: any[] = [];
let numberOfHotDogs: any[] = []
for (let i: number = 0; i < dataLine.length; i++) {
  dataEnd = dataLine[i].split(';');
  for (let j: number = 11; j < dataEnd.length; j++) {
    cheesyHotDog.push(dataEnd[j]);
  }
}
cheesyHotDog = cheesyHotDog.sort();
for (let k: number = 0; k < cheesyHotDog.length; k++) {
  if (cheesyHotDog[k].value === cheesyHotDog[k-1].value) {
    numberOfHotDogs[k].push(cheesyHotDog)
  }
}
console.log(cheesyHotDog);
}
dataAnalize('lottery.cvs');