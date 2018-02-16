'use strict';

/* you can embed statements inside one another, like here
an if else statement is in the loop, so when the loop starts and the if statement is true
it will do something, and if not, then the loop runs around.
*/
for (let i: number = 1; i <= 100; i++) {
    if ((i % 15 == 0)) {
        console.log('fizzbuzz');
        continue;
    } else if ((i % 3) == 0) {
        console.log('fizz');
        continue;
    } else if (i % 5 == 0) {
        console.log('buzz');
        continue;
    }
    console.log(i);
}