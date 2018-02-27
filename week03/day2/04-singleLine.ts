'use strict';
const fs = require('fs');

try {
  fs.writeFileSync('my-file.txt', 'Feher Sanyi')
} catch {
  console.log('Unable to write file: my-file.txt');
}