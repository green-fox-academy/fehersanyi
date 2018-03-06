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
		if(this.ammoStorage !> 0) { 
			this.motherShip.forEach(e => {
				e.ammo += e.maxAmmo - e.ammo;
				this.ammoStorage -= e.ammo;
			});
		} else {
			throw new Error('no ammo');
		}
	}

	fight(enemy: Carrier) {
		this.motherShip.forEach(e => {
			enemy.healthPoints -= e.fight();
		});

	}

	getMaxDmg(): number {
		let sum: number = 0;
		this.motherShip.forEach(e => {sum += e.ammo * e.baseDamage})
		return sum;
	}

	containedAircraft() {
		let list = [];
		this.motherShip.forEach(e => {list.push(e.getStatus() + '\r\n')});
		return list;
	}

	getStatus() {
		if (this.healthPoints > 0) {
			return `HP: ${this.healthPoints}, Aircraft count: ${this.motherShip.length}, Ammo storage: ${this.ammoStorage} Total damage: ${this.getMaxDmg()}  \r\n Aircrafts: \r\n ${this.containedAircraft()}`
		} else {
			return 'It\'s dead, Jim :\('
		}
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
let vessel2 = new Carrier(2000, 500);
let plane1 = new F16();
let plane2 = new F35();
vessel1.addAircraft(plane1);
vessel1.addAircraft(plane2);
console.log(vessel1);
 vessel1.fill();
console.log(vessel1);
console.log(vessel2);
vessel1.fight(vessel2);
console.log(vessel2);
vessel1.fill();
console.log(vessel1.getStatus());
console.log(vessel2.getStatus());
