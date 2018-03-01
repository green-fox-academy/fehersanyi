'use strict';

function xaxx(s: string) {
  if (s.indexOf('x') === -1) {
    return s;
  }
  return xaxx(s.replace('x', 'y'));
}

console.log(xaxx('xaxx'));