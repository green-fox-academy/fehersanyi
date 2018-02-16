'use strict';
// swap numbers

let a: number = 123;
let b: number = 526;
let temp: number;
console.log('originally a is ' + a + ' and b is ' + b);
temp = a;
a = b;
b = temp;
console.log('after the swap a equals ' + a + ' and b equals ' + b);