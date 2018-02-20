'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];
function appendA (inPut){
    let appended: string [] = []
    for (let i = 0; i < inPut.length; i++) {
        appended = appended.concat(inPut[i] + 'a');
    }
    return appended;
}
console.log(appendA(far));

// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'
export = appendA;