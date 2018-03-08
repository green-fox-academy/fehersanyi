import { Comparable } from '../../week04/day3/comparable'
import { Printable } from '../../week04/day3/printable'
class Thing implements Comparable, Printable {
  private name: string;
  private completed: boolean;

  constructor(name: string){
      this.name = name;
  }
  public complete() {
      this.completed = true;
  }
	get isitComplete() {
		if (this.completed === true) {
			return '[x]';
		} else {
			return '[ ]';
		}
	}
	get urName() {
		return this.name;
	}
	compareTo(thing: Thing): number {
		return this.completed === thing.completed 
		? [this.name, thing.name].sort().indexOf(this.name) - 0.5
		: this.completed
		? - 1
		: 1;
	}
	printAllFields() {
		return this.name;
	}
}


export {Thing};