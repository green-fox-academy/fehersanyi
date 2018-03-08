'use strict';
export let fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
export function member(n: number): number {
  return fibo[n].valueOf()
}