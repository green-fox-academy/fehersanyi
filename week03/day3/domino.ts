'use strict';
import { Printable } from '../../week04/day3/printable'
import { Comparable } from '../../week04/day3/comparable'

class Domino implements Comparable, Printable {
  values: number[];
  constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
  }
  compareTo(stuff: Domino): number {
    return (this.values[0] - stuff.values[0]) ;
  }
  printAllFields() {
    return this.values;
  }
}


export { Domino };