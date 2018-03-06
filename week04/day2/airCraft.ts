'use strict';

class Carrier {
	motherShip: AirCraft[] = [];
	ammoStorage: number;
	healthPoints: number;

	constructor(ammo: number, health: number) {
		this.ammoStorage = ammo;
		this.healthPoints = health;
	}

	addAircraft(type: AirCraft) {
		this.motherShip.push(type)
	}

	fill() {
		this.motherShip.forEach(e => {
			e.ammo += e.maxAmmo - e.ammo;
			this.ammoStorage -= e.ammo;
		})
		
	}

	fight() {

	}

	getStatus() {

	}
}

class AirCraft {
	ammo: number = 0;
	baseDamage: number;
	maxAmmo: number;
	constructor() {
		this.ammo;
	}

	fight() {
		let dmg: number = this.ammo * this.baseDamage;
		this.ammo = 0;
		return dmg;
	}

	refill() {
		return this.ammo += this.maxAmmo - this.ammo;
	}

	getType() {}

	getStatus() {
		return `Type ${this.getType()}, Ammo:${this.ammo}, Base damage:${this.baseDamage}, All damage: ${this.ammo * this.baseDamage}`
	}

}

class F16 extends AirCraft {
	maxAmmo: number = 8;
	baseDamage: number = 30; 
	constructor() {
		super();
	}
	getType() {
		return 'F16';
	}
}

class F35 extends AirCraft {
	maxAmmo: number = 12;
	baseDamage: number = 50;
	constructor() {
		super();
	}

	getType() {
		return 'F35';
	}

}

let vessel1 = new Carrier(2000, 5000);
let plane1 = new F16();
vessel1.addAircraft(plane1);
console.log(vessel1);
vessel1.fill();
console.log(vessel1);