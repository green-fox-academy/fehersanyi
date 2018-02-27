'use strict';
const fs = require('fs');

let cloud = fs.readFileSync('logs.txt', 'utf-8');
let cloudArray: any [] =  cloud.split('\r\n');
// console.log(cloudArray);

//uniq logs
let makeUnique = (inPut) => inPut.filter((element, index, self) => self.indexOf(element) === index);

console.log(makeUnique(cloudArray));

// get post ratio
let gets: any[] = [];
let posts: any[] = [];

function getGetPost (inFileArray: any[]) {
  for (let i: number = 0; i < inFileArray.length; i++) {
    if (inFileArray[i].includes('GET')) {
      gets.push(inFileArray[i]);    
    }else if (inFileArray[i].includes('POST')) {
      posts.push(inFileArray[i]);
    }
  }
  console.log(gets.length + ':' + posts.length);
}
getGetPost(cloudArray);