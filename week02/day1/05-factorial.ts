'use strict'
function factorio(input: number){
    let value:number =1;
   for ( let kramp: number = 0; kramp < input; kramp++){
        value = value * (input - kramp)
   }
   console.log(value);
}
factorio(5);