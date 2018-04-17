const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
	if (req.query.message === undefined) {
		res.json({
			"error": "I am Groot!"
		})
	} else {
		res.json({
			"recieved": req.query.message,
			"translated": "I am Groot"
		})
	}
});

app.get('/yondu', (req, res) => {
	if (req.query.distance === undefined || req.query.time === undefined) {
		res.json({
			"error": "no agression son"
		})
	} else {
		console.log(parseInt(req.query.time))
		if (req.query.time === '0' ||
			isNaN(parseInt(req.query.distance)) ||
			isNaN(parseInt(req.query.time))) {
			res.json({
				"error": "you can't do this son"
			})
		} else {
			res.json({
				"distance": req.query.distance,
				"time": req.query.time,
				"speed": req.query.distance / req.query.time
			})
		}
	}
})

const maxCargo = 12500;

let ship = {
	caliber25: 0,
	caliber30: 0,
	caliber50: 0,
	shipstatus: 0,
	ready: false
};

app.get('/rocket', (req, res) => {
	res.json(ship)
})

app.get('/rocket/fill', (req, res) => {

	function isItFull(caliber) {
		if (parseInt(req.query.amount) + ship.caliber25 + ship.caliber30 + ship.caliber50 > maxCargo) {
			caliber += maxCargo - (ship.caliber25 + ship.caliber30 + ship.caliber50)
		} else {
			caliber += parseInt(req.query.amount)
		}
	}


	if (req.query.caliber === undefined || req.query.amount === undefined) {
		res.json({
			error: "y tho"
		})
	} else {
		if (req.query.caliber !== '.25' &&
			req.query.caliber !== '.30' &&
			req.query.caliber !== '.50') {
			res.json({
				"error": "y u cant write?"
			})
		} else {
			ship.shipstatus += parseInt(req.query.amount) / maxCargo * 100;
			if (ship.shipstatus >= 100) {
				ship.shipstatus = 'full';
				ship.ready = true;
			}
			if (req.query.caliber === '.25') {
				isItFull(ship.caliber25);
			} else if (req.query.caliber === '.30') {
				isItFull(ship.caliber30)
			} else if (req.query.caliber === '.50') {
				isItFull(ship.caliber50)
			}
			res.json({
				"recieved": `${req.query.caliber}`,
				"amount": `${req.query.amount}`,
				"shipstatus": `${ship.shipstatus}%`
			})
		}
	}
})

let food = [{
		name: 'lasagna',
		amount: 1,
		calorie: 40
	},
	{
		name: 'panini',
		amount: 6,
		calorie: 68
	},
	{
		name: 'babgulyas',
		amount: 3,
		calorie: 60
	},
	{
		name: 'csirkemell',
		amount: 4,
		calorie: 8	
	}
];



app.get('/drax', (req, res) => {
	res.json(food)
})

app.get('/drax/add', (req, res) => {
	let plusFood = {
		name: req.query.name,
		amount: req.query.amount,
		calorie: req.query.calorie
	}
	food.push(plusFood)
	res.json(food)
})

app.get('/drax/remove', (req, res) => {
	food.forEach(e => {
		if (req.query.name === e.name) {
			food.splice(food.indexOf(e), 1)
		}
	})
	res.json(food)
})

app.get('/drax/change', (req, res) => {
	food.forEach(e => {
		if (req.query.name === e.name) {
			e.amount += parseInt(req.query.amount);
			res.json(food)
		} else {
			res.json({
				"error": "no such food"
			})
		}
	})

})


let playList = [
	{
		author: 
	}
]

app.get('/awesome', (req, res) => {})

module.exports = app;