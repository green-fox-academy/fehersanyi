'use strict';
const fs = require('fs');

function dataAnalize (myFile: string) {
let lotteryData: string = fs.readFileSync(myFile, 'utf-8');
let dataLine: any [] = lotteryData.split('\r\n');
let dataEnd: any [] = [];
let cheesyHotDog: any[] = [];
for (let i: number = 0; i < dataLine.length; i++) {
  dataEnd = dataLine[i].split(';');
  for (let j: number = 11; j < dataEnd.length; j++) {
    cheesyHotDog.push(dataEnd[j]);
  }
}
let yummiHotDog: {} = {}
for(let i: number = 0; i < cheesyHotDog.length; i++) {
  if (yummiHotDog[cheesyHotDog[i]] === undefined) {
    yummiHotDog[cheesyHotDog[i]] = 0;
  }
  yummiHotDog[cheesyHotDog[i]]++;
}
let biggestOccurance: number[] = Object.values(yummiHotDog).sort().reverse().splice(1,5);
let finalfinals: any [] = [];
Object.keys(yummiHotDog).forEach(function(cheesyHotDog) {
  if(biggestOccurance.indexOf(yummiHotDog[cheesyHotDog]) > -1) {
    finalfinals.push(cheesyHotDog);
  }
})
console.log(finalfinals);
}

dataAnalize('lottery.cvs');