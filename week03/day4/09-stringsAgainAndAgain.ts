'use strict';

function plusThat(s: string) {
  if (s.endsWith('+')) {
    return s;
  }
    return plusThat(s.split('').map(i => i + '+').join(''))
}

console.log(plusThat('this shall work'));