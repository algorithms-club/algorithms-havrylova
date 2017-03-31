'use strict';

	  

function nextYearFind(year){
	let wrongNumber = 'Please enter a Number >= 1000 and <= 9000'; 
	if ( year > 9000 || year < 1000 || year === null || year === undefined || isNaN( year ) ) {
	  return (wrongNumber);
	}
  	let yearN = year.toString();
    let nextYear = +year +1;
    let nextYearString = nextYear.toString();
    let year2 = nextYearString.split('');
    let count = 0;
      for( let i = 0; i < year2.length; i++ ){        	     
                    for( let j = 0; j < year2.length; j++ ){
                        if (j == i) continue;
                        if (year2[i] === year2[j] ) {
                            count++
                            break
                        } 
                    }
        }
        if (count == 0) { 
           return +year2.join(''); 
        } else {
          return nextYearFind(+year +1);
        }    
}
module.exports = nextYearFind;