'use strict'; 
import { Animal } from './animalPackage'
interface Flyable {
  land();
  fly();
  takeOff()
}

abstract class Vehcile {
  type: string;
  fuelTank: number;
  sht: number;
}

class Helicopter extends Vehcile implements Flyable {
  land() {}
  fly() {}
  takeOff() {}
}
class Brird extends Animal implements Flyable {
  land() {}
  fly() {}
  takeOff() {}
}