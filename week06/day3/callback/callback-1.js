'use strict';

const mapWith = (array, callback) => {
  let output = [];
  for(let i = 0; i < array.length; i++) {
  output.push(callback(array[i]));
  }
  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.

  return output
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:
const removeSecondLetter = (inPut) => {
  let output = [];
  for(let i = 0; i < inPut.length; i++) {
    if(i % 2 === 0) {
      output.push(inPut[i]);
    }
  }
  return output.join('');
}
// Create a callback function which remove every second letter from a string

const words = ['map', 'reduce', 'filter'];

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']