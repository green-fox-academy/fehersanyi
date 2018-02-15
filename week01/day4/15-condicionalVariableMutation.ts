let a: number = 24;
let out: number = 0;
//ha a paros, csokkentsd out-ot egyel
// if a is even increment out by one
if (a % 2 === 0)
out = out - 1;
console.log(out);

let b: number = 13;
let out2: string = '';

// if b is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "Less!",
// if more than 20 set out2 to "More!"
if (b >10 && b < 20) {
    out2 = 'sweet';
} else if (b < 10) {
    out2 = 'less';
} else {
    out2 = 'more'
}
console.log(out2);

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = true;

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same
if (credits >= 50 && !isBonus) {
    c = c - 2;
} else if (credits < 50 && !isBonus) {
    c = c - 1;
} else {

}
console.log(c);



let d: number =  9;
let time: number = 201;
let out3: string = '';

// if d is dividable by 4
if (((d % 4) == 0) && time > 200) {
// and time is not more than 200
// set out3 to "check"
out3 = 'check';
// if time is more than 200
} else if (time > 200) {
// set out3 to "Time out"
out3 = 'time out'  ;
} else {
    out3 = 'run forest run!!';
}
// otherwise set out3 to "Run Forest Run!"
console.log(out3);