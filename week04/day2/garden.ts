'use strict';
class Plant {
	name: string;
	waterNeeds: number = 0;
	needWater(){};
	water(water: number) {}
}
class Garden {
	garden: Plant[] = []
	name: string
	consturctor(name: string) {
		this.name = name;
	}

	water(water: number) {
		this.garden.forEach(e =>{
			e.water(water / this.garden.length);
		})
	}

	addFlower(flower: Flower) {
		this.garden.push(flower);
	}

	addTree(tree: Tree) {
		this.garden.push(tree);
	}

	getGarden() {
		return this.garden;
	}
	getWaterNeeds() {
		this.garden.forEach(e => { 
			if(e.needWater()) {
			  console.log(`${e.name} needs water`);
			}
			else {
			  console.log(`${e.name} doesen't need water`);
			}
		});
	}
}


class Flower extends Plant {
	name: string;
	color: string;

	constructor(name: string, color: string) {
		super();
		this.name = name;
		this.color = color
	}
	
	water(water: number) {
			this.waterNeeds += water * 0.75;
	}

	needWater(): boolean {
		return this.waterNeeds <= 5;
	}
}

class Tree extends Plant {
	name: string;
	color: string;

	constructor(name: string, color: string) {
		super();
		this.name = name;
		this.color = color;
	}
	needWater(): boolean {
		return this.waterNeeds <= 10;
	}

	water(water: number) {
		this.waterNeeds += water * 0.4;
}

}
let garden = new Garden();
let pipacs = new Flower('pipacs', 'yellow');
let ibolya = new Flower('ibolya', 'blue');
let orangetree = new Tree('orangetree', 'orange');
let demtree = new Tree('purpletree',  'purple');
garden.addFlower(pipacs);
garden.addFlower(ibolya);
garden.addTree(orangetree);
garden.addTree(demtree);
garden.getWaterNeeds();
garden.water(40);
garden.getWaterNeeds();
garden.water(70);
garden.getWaterNeeds();