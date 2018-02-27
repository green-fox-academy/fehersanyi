'use strict';
function divider (n: number) {
  if (n === 0) {
    return 'fail';
  }
  return 10 / n;
}
console.log(divider(0));