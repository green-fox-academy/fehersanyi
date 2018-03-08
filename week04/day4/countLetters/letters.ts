'use strict';

export function letterCounter(inPut: string) {
  let stuff: any = {};
  inPut.split('').forEach(e => {
    stuff[e] === undefined
      ? stuff[e] = 1
      : stuff[e]++
  })
  return stuff;
}
console.log(letterCounter('heha'));