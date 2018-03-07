'use strict';
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