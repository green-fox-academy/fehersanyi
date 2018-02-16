'use strict';
/* while is another kind of loop, 
it works a little different then for, 
so in a few cases it works better, 
well like if you don't know how many times you want to repeat it,
 but is a condicion checks. */
let i: number = 0;
while (i <= 500) {
    if ((i % 2) == 0) {
        console.log(i);
    }
    i++;
}