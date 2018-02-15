'use strict';
let lineCount: number = 6;
for (let i: number = 0; i < lineCount; i++) {
    console.log("*");
}
console.log();
for (let i: number = 0; i < lineCount - 2; i++) {
    console.log("*");
    for (let j: number = 0; j < lineCount - 2; j++) {
        console.log(" ");
    }
    console.log("*");
}
for (let i: number = 0; i < lineCount; i++) {
    console.log("*");
}
console.log();
