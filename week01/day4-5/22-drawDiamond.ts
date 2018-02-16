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