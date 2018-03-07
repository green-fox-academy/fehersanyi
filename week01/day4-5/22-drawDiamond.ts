'use strict';
let lineCount: number = 8/2;
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
for(let i: number = lineCount-1; i >= 1; i--) {
  let star: string ="";
  for(let j: number = lineCount; j > i; j--) {
    star +=" ";
  }
  for(let k: number = 1; k<=(i*2)-1; k++) {    
    star += "*";
  }
console.log(star);  
}   