'use strict';
let lineCount: number = 4;
for (let column: number = 1; column <= lineCount; column++) {
  let star: string = "";
  for (let row: number = 1; row <= column; row++) {
    star += '*';
	}
console.log(star);
}