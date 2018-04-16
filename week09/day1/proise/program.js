'use strict'

require('es6-promise');

let promise = new Promise((fulfill, reject) => {
		setTimeout(() => reject(new Error('REJECTED!')), 300);
	})
	.then(null, onReject)

function onReject(error) {
	console.log(error.message)
}

promise