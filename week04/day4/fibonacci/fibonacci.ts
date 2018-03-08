'use strict';
export let fibo = [];
export function fibonacci(n: number): number[] {
  if (n === 1) 
  {
    return [0, 1];
  } 
    fibo = fibonacci(n - 1);
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
    return fibo;
};
export function member(n: number): number {
  return fibo[n].valueOf()
}
