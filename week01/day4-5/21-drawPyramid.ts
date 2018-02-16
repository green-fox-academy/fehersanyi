'use strict';

/*in this example we have four variables, 
    linecount stands as our savior and sets the lines.
    i stands for columns
    j is in the rows, and will create whitespace for us
    k is in the rows as well, it will displaz the characters we want to see.
    j will lessen throught the loop creating less and less whitepace
    k will be more by 2 characters every time, so we can get the pyramid shape.
*/
let lineCount: number = 4;
for(let i: number = 0; i <= lineCount; i++) {
    let star: string ="";
        for(let j: number = 1; j <= lineCount-i; j++) {
            star +=" ";
        }
        for(let k: number = 1; k<=(i*2)-1; k++) {    
           star += "*";
        }
        console.log(star);  
    } 