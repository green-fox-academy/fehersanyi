'use strict';
const fs = require('fs');

function dataAnalize (myFile: string) {
let lotteryData: string = fs.readFileSync(myFile, 'utf-8');
let dataLine: any [] = lotteryData.split('\r\n');
let dataEnd: any [] = [];
for (let i: number = 0; i < dataLine.length; i++) {
  dataEnd = dataLine[i].split(';');
}
}
dataAnalize('lottery.cvs');