'use strict';

function Airplane(){
  
  this.airline = '';
  this.flight = '';
  this.flightNum = '';
  this.code = '';
  this.bookings = [];
  this.book = function(flightNum, name){
    console.log(`${name} booked a flight on ${this.airline}.
    Flight Number: ${flightNum} Code: ${this.code}. on ${this.day()}`);
    this.bookings.push ({ name: name, flightNum: flightNum, date: this.day(), airline: this.airline})
  }
  this.day = function(){
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const event = new Date();
   return event.toLocaleDateString(undefined, options)
  } 
  
}

const luftansa = new Airplane();
luftansa.airline ='Luftansa';
luftansa.code = 'SFO-HSA-ARV';
const usaair = new Airplane();
usaair.airline = 'usaair';
usaair.code = 'GHT-MNB-012923';



luftansa.book('JKL845', 'Mr. Pahvette');
console.table(luftansa.bookings);
// console.log(event.toLocaleDateString(undefined, options));

