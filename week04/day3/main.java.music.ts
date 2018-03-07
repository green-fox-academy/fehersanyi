'use strict';

abstract class Instrument {
  protected name: string;

  play() { }
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;
  sound() {
    
  }
}

class ElectricGuitar extends StringedInstrument {
  numberOfStrings = 6;
  play() {
    this.sound(); {
      return 'Twang';
    }
  }
  constructor(strings?: number) {
    super()
    this.numberOfStrings = strings;
  }
}

class BassGuitar extends StringedInstrument {
  numberOfStrings = 4;
  play() {
    this.sound(); {
      return 'Duum, duum, duum';
    }
  }
  constructor(strings?: number) {
    super()
    this.numberOfStrings = strings;
  }
}

class Violin extends StringedInstrument {
  numberOfStrings = 4;
  play() {
    this.sound(); {
      return 'Screech';
    }
  }
  constructor(strings?: number) {
    super()
    this.numberOfStrings = strings;
  }
}

export { ElectricGuitar, BassGuitar, Violin };