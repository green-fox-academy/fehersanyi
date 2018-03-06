'use strict';

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
		return 'F16'
	}
}

class F35 extends AirCraft {
	maxAmmo: number = 12;
	baseDamage: number = 50;
	constructor() {
		super();
	}

	getType() {
		return 'F35'
	}

}

let test = new F16();
console.log(test.ammo);
test.refill();
console.log(test.ammo);
console.log(test.fight());
console.log(test.ammo);

let test2 = new F35();
console.log(test2.ammo);
test2.refill();
console.log(test2.ammo);
console.log(test2.fight());
console.log(test2.ammo);
console.log(test2.getStatus());
test2.refill();
console.log(test2.getStatus());
console.log(test.getType());