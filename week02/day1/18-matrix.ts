'use strict';
let matrix: any [] = [];
let sizeOf = 11;
for(let i = 0; i <= sizeOf; i++) {
    matrix[i] = [];
    for (let j = 0; j <= sizeOf; j++){
        if (i + j === sizeOf){
            matrix[i][j] = 1;
        } else {
            matrix[i][j] = 0;
        }
    }
    
    console.log(matrix[i].join(' '));
}

