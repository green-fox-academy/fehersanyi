'use strict';

import { Comparable } from '../../week04/day3/comparable'

class Domino implements Comparable {
  values: number[];
  constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
  }
  compareTo(stuff: Domino): number {
    return (this.values[0] - stuff.values[0]) ;
  }
}

export {Domino};