'use strict';
// lineacount a mertek, i az oszlop, j a sor.
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
        else {
            
        }
    }
    console.log(star);
}
