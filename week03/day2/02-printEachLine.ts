'use strict';
const fs = require('fs');
try {
  let content = fs.readFileSync('my-file.txt', 'utf-8');
  console.log(content);
} catch {
  console.log('this file does not exist.')
}