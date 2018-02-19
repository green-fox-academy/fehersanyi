'use strict';
let matrix: any [] = [];
for(let i = 0; i <= 3; i++) {
    matrix[i] = [];
    for (let j = 0; j <= 3; j++){
        if (i + j === 3){
            matrix[i][j] = 1;
        } else {
            matrix[i][j] = 0;
        }
    }
    
    console.log(matrix[i].join(' '));
}

