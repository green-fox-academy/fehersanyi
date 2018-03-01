'use strict';

function strangerBunnyes(n: number) {
  if (n < 1) {
    return 0;
  }
  return n % 2 === 0 
    ? 3 + strangerBunnyes(n - 1)
    : 2 + strangerBunnyes(n - 1);
  
}

console.log(strangerBunnyes(3))