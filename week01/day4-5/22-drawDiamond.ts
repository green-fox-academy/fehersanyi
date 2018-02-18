'use strict';
let lineCount: number = 8/2;

// felso haromszog

//magassag
for(let i: number = 0; i <= lineCount; i++) {
    let star: string ="";
    //whitespace
        for(let j: number = 1; j <= lineCount-i; j++) {
             star +=" ";
        }
        //maga a forma
        for(let k: number = 1; k<=(i*2)-1; k++) {    
           star += "*";
        }
        console.log(star);  
    } 

/*
this is a reverse pyramid with the same exact variables as the upper one but reverse in logic.
here i, the column will start at maximum-1 and decrease every timme by one.
j the whitespace is as for i starts at a high count and decreases, creating more and more whitespace.
k does the same thing but, beside it everything goes reverse, it will as well.
*/
    //melyseg
for(let i: number = lineCount-1; i >= 1; i--) {
    let star: string ="";
    //whitespace
        for(let j: number = lineCount; j > i; j--) {
             star +=" ";
        }
         //maga a forma
         for(let k: number = 1; k<=(i*2)-1; k++) {    
            star += "*";
        }
        console.log(star);  
}   