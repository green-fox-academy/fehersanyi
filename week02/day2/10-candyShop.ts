'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"
function sweets (inPut) {
    let correctItems: any[] = [];
    for (let i: number = 0; i <= inPut.length; i++) {
        if (i % 2 !== 0 && i < 2) {
            inPut[i] = 'Croissant';
            correctItems = inPut;
        } else if (i % 2 !== 0 && i > 2) {
            inPut[i] = 'Ice cream';
            correctItems = inPut.join(", ");
        }
    }
    return correctItems;
}
console.log(sweets(shopItems));
export = sweets;