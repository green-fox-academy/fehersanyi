'use strict';
const fs = require('fs');
try {
fs.readFileSync('my-file.txt');
} catch {
  console.log('this file does not exist.')
}

