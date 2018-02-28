'use strict';

import {Thing} from "./thing";

class Fleet {
    private things: Thing[] = [];

    constructor(){}
    add(thing: Thing){
        this.things.push(thing);
		}
		print() {
			console.log(this.things);
		}
		get getThings() {
			return this.things
		}
		get datThing() {
			return this.things;
		}
}

export {Fleet};