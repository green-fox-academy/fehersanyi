'use strict'

require('es6-promise');

let promise = new Promise((fulfill, reject) => {
	setTimeout(fulfill, 300)
})
.then(console.log('FULFILLED'));