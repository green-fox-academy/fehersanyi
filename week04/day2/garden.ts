'use strict';

class Garden {
	garden: Garden[] = []
	name: string
	waterNeeds: number = 0;
	consturctor(name: string) {
		this.name = name;
	}

	water(water: number) {
		this.waterNeeds += water;
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
}

class Flower extends Garden {
	name: string;
	color: string;

	constructor(name: string, color: string) {
		super();
		this.name = name;
		this.color = color
	}
}

class Tree extends Garden {
	name: string;
	color: string;

	constructor(name: string, color: string) {
		super();
		this.name = name;
		this.color = color;
	}
}
let Ysa = new Garden();
let pipacs = new Flower('pipacs', 'yellow');
let ibolya = new Flower('ibolya', 'blue');
let orangetree = new Tree('orangetree', 'orange');
let demtree = new Tree('purpletree',  'purple');
Ysa.addFlower(pipacs);
Ysa.addFlower(ibolya);
Ysa.addTree(orangetree);
Ysa.addTree(demtree);
console.log(Ysa.getGarden());
console.log(pipacs.waterNeeds);
Ysa.water(10);
console.log(pipacs.waterNeeds);