'use strict';
let firstOne: number [] = [34, 12, 24, 9, 5];
let secondOne: number[] = [34, 12, 24, 9, 5];
firstOne.sort((a, b) => {
  return a - b;
});
console.log(firstOne);

secondOne.sort((a, b) => {
    return a - b;
  }).reverse();
  console.log(secondOne);