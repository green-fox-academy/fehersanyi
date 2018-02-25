'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];
function appendA (inPut){
    let shorted = far.map(far => far + 'a').join();
console.log(shorted);
}
appendA(far);
// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'
export = appendA;