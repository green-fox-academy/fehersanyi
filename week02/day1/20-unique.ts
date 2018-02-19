'use strict';
let myArray: number[] = [1, 11, 34, 11, 52, 61, 1, 34];
let makeUnique = (a) => a.filter((el, i, self) => self.indexOf(el) === i);

console.log(makeUnique(myArray));