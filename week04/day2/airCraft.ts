'use strict';

class AirCraft {
	ammo: number = 0;
	baseDamage: number;
	constructor() {
		this.ammo;
	}

	fight() {
		let dmg: number = this.ammo * this.baseDamage;
		this.ammo = 0;
		return dmg;
	}

	refill() {}

}

class F16 extends AirCraft {
	maxAmmo: number = 8;
	baseDamage: number = 30; 
	constructor(ammo: number) {
		super();
		this.ammo = ammo
	}

	refill() {
		return this.ammo += this.maxAmmo - this.ammo;
	}
}

class F35 extends AirCraft {
    
}

let test = new F16(0);
console.log(test.ammo);
test.refill();
console.log(test.ammo);
console.log(test.fight());
console.log(test.ammo);