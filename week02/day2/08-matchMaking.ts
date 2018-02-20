'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

function makingMatches(inPut1: string[], inPut2: string[]) {
    let coed: string [] = [];
    for (let i = 0; i <= inPut1.length; i++) {
        
        coed = coed.concat(inPut1[i], inPut2[i]);
    
    }
    return coed;
}
   

console.log(makingMatches(girls, boys));
//let coed = inPut1.concat(inPut2).join(", ");
export = makingMatches;