'use strict';

function bunnyEars(b: number) {
  let e: number = 2
  if (b < 1) {
    return 0;
  }
  return e + bunnyEars(b - 1);
}

console.log(bunnyEars(3));