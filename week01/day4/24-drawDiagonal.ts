'use strict';
// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is
let lineCount: number = 6;
// oszlop loop
for (let i: number = 1; i <= lineCount; i++) {
    // sor loop
    let star: string = '';
    for (let j: number = 1; j <= lineCount; j++) {
        // melyik sorba hova
        if (i === 1 || i === lineCount || j === 1 || j === lineCount){
            star += '%';
        }
        else if (i === j) {
            star += '%';
        }
        else if (j > 1 || j < lineCount) {
            star += ' ';
        }
        
    }
    
console.log(star);
}
