'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one
function substr(str: string, keyword: string) : number {
  return -1;
}

//  Example
console.log(substr("well that was easy...", "was"));
// should print: `17`
console.log(substr("well that was easy...", "fascinating"));
// should print: `-1`