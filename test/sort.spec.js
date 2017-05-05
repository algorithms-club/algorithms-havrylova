'use strict';

const algolib = require('../index.js');

describe.only('#sort', function() {
	it('should show type of ', function(){
		// let sortFunction = algolib.sort();
		algolib.sort.should.be.instanceOf(Function);
	});

})