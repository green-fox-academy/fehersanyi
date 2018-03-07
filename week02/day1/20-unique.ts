'use strict';
let myArray: number[] = [1, 11, 34, 11, 52, 61, 1, 34];
let makeUnique = (inPut) => inPut.filter((element, index, self) => self.indexOf(element) === index);
console.log(makeUnique(myArray));