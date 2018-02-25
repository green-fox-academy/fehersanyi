'use strict'
function factorio(inPut: number){
    let value:number =1;
   for ( let i: number = 0; i < inPut; i++){
        value = value * (inPut - i)
   }
   console.log(value);
}
factorio(5);