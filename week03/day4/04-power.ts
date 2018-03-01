'use strict';

function power(n: number, b: number) {
  if (b <= 1) {
    return n;
  }
  return n * power(n, b-1);
}

console.log(power(3, 3));