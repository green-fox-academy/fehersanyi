'use strict';
// here linecount is a variable that will determine how many rows will the drawing go.


// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is


/* here, i represents the colums, it starts at the first and the loop
will create as many as we prefixed in linecount.
j stands for rows, in this example it will be always one more than i (the columns).
star represent an empty variable witch will change as the condicions change we set.
*/
let lineCount: number = 4;
for (let column: number = 1; column <= lineCount; column++) {
        let star: string = "";
    for (let row: number = 1; row <= column; row++) {
        star = star + '*';
    }
console.log(star);
}