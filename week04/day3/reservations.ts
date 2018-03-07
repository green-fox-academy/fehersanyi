'use strict';

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  reservationCode: any[] = [];
  reservationDate: string;

  constructor(code: any, date: string) {
    this.reservationCode = code;
    this.reservationDate = date;
  }

  getCodeBooking():string {
    return `${this.reservationCode}`;
  }
  getDowBooking():string {
    return `${this.reservationDate}`;
  }
}


let reservationDate: string[] = ['MON', 'THU', 'WED', 'SAT', 'FRI', 'SUN', 'TUE' ]

let reservarion1 = new Reservation('1WBA3OMU', reservationDate[Math.floor(Math.random() * 6)])
let reservarion2 = new Reservation('0V5OH7VS', reservationDate[Math.floor(Math.random() * 6)])
let reservarion3 = new Reservation('CV6QOAJO', reservationDate[Math.floor(Math.random() * 6)])
let reservarion4 = new Reservation('03GHEJMV', reservationDate[Math.floor(Math.random() * 6)])
let reservarion5 = new Reservation('M5JFB32I', reservationDate[Math.floor(Math.random() * 6)])
let reservarion6 = new Reservation('W30PF0E0', reservationDate[Math.floor(Math.random() * 6)])
let reservarion7 = new Reservation('S0R70GMN', reservationDate[Math.floor(Math.random() * 6)])
let reservarion8 = new Reservation('3E032B3C', reservationDate[Math.floor(Math.random() * 6)])
let reservarion9 = new Reservation('OD27E36J', reservationDate[Math.floor(Math.random() * 6)])
let reservarion10 = new Reservation('4MEU0657', reservationDate[Math.floor(Math.random() * 6)])

console.log(`Booking# ${reservarion1.getCodeBooking()} for ${reservarion1.getDowBooking()}`);
console.log(`Booking# ${reservarion2.getCodeBooking()} for ${reservarion2.getDowBooking()}`);
console.log(`Booking# ${reservarion3.getCodeBooking()} for ${reservarion3.getDowBooking()}`);
console.log(`Booking# ${reservarion4.getCodeBooking()} for ${reservarion4.getDowBooking()}`);
console.log(`Booking# ${reservarion5.getCodeBooking()} for ${reservarion5.getDowBooking()}`);
console.log(`Booking# ${reservarion6.getCodeBooking()} for ${reservarion6.getDowBooking()}`);
console.log(`Booking# ${reservarion7.getCodeBooking()} for ${reservarion7.getDowBooking()}`);
console.log(`Booking# ${reservarion8.getCodeBooking()} for ${reservarion8.getDowBooking()}`);
console.log(`Booking# ${reservarion9.getCodeBooking()} for ${reservarion9.getDowBooking()}`);
console.log(`Booking# ${reservarion10.getCodeBooking()} for ${reservarion10.getDowBooking()}`);
