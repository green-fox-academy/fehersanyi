'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
/*function containsSeven(inPut) {
    if (inPut.includes(7) == true) {
        return 'yaaaaaaaaay';
    } else {
        return 'nooooooo';
    }
}
console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
export = containsSeven;*/

function containsSeven(inPut: number[]) {
    let myCry: string = 'Nooooooo';
    inPut.forEach(function(item){
        if (item == 7) {
            myCry = 'yaaaaaaaay';
        }
    })
    return myCry;
    }
console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
export = containsSeven;