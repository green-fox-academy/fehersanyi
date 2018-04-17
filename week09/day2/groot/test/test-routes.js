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

			request(app)
			.get('/rocket')
			.expect(200)
			.expect('Content-Type', /json/)
			.expect({
				"caliber25": 0,
				"caliber30": 0,
				"caliber50": 0,
				"shipstatus": 0,
				"ready": false
			})
			.end((err, res) => {
				t.error(err)
			})

			request(app)
			.get('/rocket/fill?caliber=.50&amount=5000')
			.expect(200)
			.expect('Content-Type', /json/)
			.expect({
				"recieved": ".50",
				"amount": 5000,
				"shipstatus": "40%"
			})
			.end((err, res) => {
				t.error(err)
				t.end();
			})


	});