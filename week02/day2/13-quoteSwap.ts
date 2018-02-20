'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().
let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
function quoteSwap (inPut) {
    let temp: string;
    temp = inPut[2];
    inPut[2] = inPut[5];
    inPut[5] = temp;

  //  inPut.splice(2,0, inPut.splice(5,0,));

    return inPut.join(" ");
}
console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."
export = quoteSwap;