
const test = require('tape')
const request = require('supertest')
const app = require('../routes')

test('groot endpoint', (t) => {
	request(app)
		.get('/groot')
		.expect(200)
		.expect('Content-Type', /json/)
		.expect({
			received: "somemessage",
			translated: "I am Groot!"
		})
		.end((err, res) => {
			t.error(err);
			t.end();
		});
});