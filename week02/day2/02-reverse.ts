'use strict';
let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
function reverse(inPut){
    return inPut.split("").reverse().join("");
}
console.log(reverse(reversed));
export = reverse;