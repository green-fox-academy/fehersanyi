'use strict'

require('es6-promise');

function firstOne(arg) {
	return arg + 1;
}
function secondOne(arg) {
	return arg + 1;
}


function all(promise1, promise2) {
	counter = 0;
	Promise.resolve(promise1(counter))
	.then(promise2)
};

// function alwaysThrows() {
// 	throw new Error('OH NOES');
// };

// function iterate(arg) {
// 	console.log(arg);
// 	return arg + 1;
// };

// Promise.resolve(
// 	iterate(1))
// 	.then(iterate)
// 	.then(iterate)
// 	.then(iterate)
// 	.then(iterate)
// 	.then(alwaysThrows)
// 	.then(iterate)
// 	.then(iterate)
// 	.then(iterate)
// 	.then(iterate)
// 	.then(iterate)
// 	.catch(e => console.log(e.message))

// function parsePromised() {
// 	let promise = new Promise((fulfill, reject) => {
// 		try {
// 			JSON.parse(process.argv[2])
// 		}
// 		catch (e) {
// 			(console.log(e.message))
// 		}
// 	})
// }
// parsePromised();

// function attachTitle(arg) {
// 	return `DR. ${arg}`;
// }

// let promise = new Promise((fulfill, reject) => {
// 	fulfill('MANHATTAN');
// })
// promise
// .then(attachTitle)
// .then(console.log)

// first()
//     .then(second)
//     .then(console.log)

// let promise = new Promise((fulfill, reject) => {
// 		fulfill('PROMISE VALUE')
// 	})
// 	.then(console.log)
// console.log('MAIN PROGRAM')

// let promise = Promise.resolve('PROMISE VALUE')
// .then(console.log)
// .catch((error) => console.error('oh, you suck...'))