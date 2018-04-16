'use strict'

require('es6-promise');

// let promise = new Promise((fulfill, reject) => {
// 		fulfill('PROMISE VALUE')
// 	})
// 	.then(console.log)
// console.log('MAIN PROGRAM')

let promise = Promise.resolve('PROMISE VALUE')
.then(console.log)
.catch((error) => console.error('oh, you suck...'))