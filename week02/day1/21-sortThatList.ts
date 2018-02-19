'use strict';
let firstOne: number [] = [34, 12, 24, 9, 5];
let secondOne: number[] = [34, 12, 24, 9, 5];
firstOne.sort(function(a, b) {
  return a - b;
});
console.log(firstOne);

secondOne.sort(function(a, b) {
    return a - b;
  }).reverse();
  console.log(secondOne);