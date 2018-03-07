'use strict';
let a: number = 24;
let out: number = 0;
if (a % 2 === 0)
out = out - 1;
console.log(out);

let b: number = 13;
let out2: string = '';

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
if (((d % 4) == 0) && time > 200) {
	out3 = 'check';
} else if (time > 200) {
out3 = 'time out'  ;
	} else {
    out3 = 'run forest run!!';
	}
console.log(out3);