'use strict';
// here linecount is a variable that will determine how many rows will the drawing go.
let lineCount: number = 4;

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
for (let i: number = 1; i <= lineCount; i++) {
        let star: string = "";
    for (let j: number = 1; j <= i; j++) {
        star = star + '*';
    }
console.log(star);
}