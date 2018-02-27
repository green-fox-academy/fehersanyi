'use strict'
const fs = require('fs');

function copyFile (fileName: string) {
  let cloud = fs.readFileSync(fileName, 'utf-8');
  fs.writeFileSync('my-secondFile', cloud);
  return true;
}
try {
  copyFile('my-file.txt');
} catch {
  console.log('sorry but no.');
}