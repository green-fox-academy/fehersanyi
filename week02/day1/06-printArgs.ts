'use strict'
function printer(input: string, input2?: string){
    if (input2 != undefined){
        return input + ' ' + input2;
    } else {
        return input
    }
}
console.log(printer('hello', 'papika'));