'use strict';

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  reservationDate: string;

  constructor() {
    this.reservationDate = `Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`
  }

  getCodeBooking(): string {
    let codeGenerator: string = '';
    for (let i: number = 0; i < 8; i++) {
      codeGenerator += codeMaker[Math.floor(Math.random() * (codeMaker.length))]
     
    }

    return codeGenerator;
  }
  getDowBooking(): string {
    return reservationDate[Math.floor(Math.random() * 6)];
  }
}

let codeMaker: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'X', 'Y', 'Z', 'V', 'W', 'U']
let reservationDate: string[] = ['MON', 'THU', 'WED', 'SAT', 'FRI', 'SUN', 'TUE']



let arrayOfReservation: Reservation[] = [];

for(let i: number = 0; i < 10; i++) {
  arrayOfReservation.push(new Reservation())
}
console.log(arrayOfReservation);