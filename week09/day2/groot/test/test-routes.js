'use strict'

const test = require('tape')
const request = require('supertest')
const app = require('../routes')

test('groot endpoint', (t) => {
	request(app)
		.get('/groot')
		.expect(200)
		.expect('Content-Type', /json/)
		.expect({
			error: "I am Groot!"
		})
		.end((err, res) => {
			t.error(err);
		});

	request(app)
		.get('/groot?message=kakafej')
		.expect(200)
		.expect('Content-Type', /json/)
		.expect({
			recieved: "kakafej",
			translated: "I am Groot"
		})
		.end((err, res) => {
			t.error(err);
		});
		
		request(app)
		.get('/yondu')
		.expect(200)
		.expect('Content-Type', /json/)
		.expect({
			error: "no agression son"
		})
		.end((err, res) => {
			t.error(err)
			t.end();
		})
		
		request(app)
			.get('/yondu?distance=100&time=10')
			.expect(200)
			.expect('Content-Type', /json/)
			.expect({
				distance: "100",
				speed: "10",
				time: "10"
			})
			.end((err, res) => {
				t.error(err);
			});

		request(app)
			.get('/yondu?distance=kakafej&time=10')
			.expect(200)
			.expect('Content-Type', /json/)
			.expect({
				error: "you can't do this son"
			})
			.end((err, res) => {
				t.error(err);
			});
	});