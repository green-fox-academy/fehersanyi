'use strict';
const fs = require('fs')


function writeItForMe (path: string, word: string, number: number) {
  for (let i: number = 0; i < number; i++) {
  fs.appendFileSync(path, word)
  }
}
writeItForMe('03-countLines.txt', 'apple \n', 666)