'use strict';

function watermelon(weight){
   let wrongNumber = 'Please enter a Number >= 1 and <= 100';
   let canDivideEven = 'YES';
   let canNotDivideEven = 'NO';

if ( weight < 1 || weight > 100 || weight === null || weight === undefined || isNaN( weight ) ) {
  return ( wrongNumber );
} else {
    if (weight % 2 === 0) {
      return ( canDivideEven );
    } else {
      return ( canNotDivideEven );
    }
}
}
module.exports = watermelon;