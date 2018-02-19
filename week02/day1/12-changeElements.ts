'use strict';
let numList: number[] = [1, 2, 3, 8, 5, 6];
numList = numList.map(num => num === 8? 4:num)
console.log(numList);