'use strict';

function fibonacci(n: number) {
  if (n === 1) 
  {
    return [0, 1];
  } 
    let s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
};

 console.log(fibonacci(5));