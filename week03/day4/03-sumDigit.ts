'use strict';

function sumDigits(n: number) {
  let remainder = n % 10;
  let sum = remainder;
  if(n >= 10) {
      let rest = Math.floor(n / 10);
      sum += sumDigits(rest); 
  }
  return sum;
}

console.log(sumDigits(123456));