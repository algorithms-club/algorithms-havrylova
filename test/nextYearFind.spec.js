'use strict';

const algolib = require('../index.js');

describe('#nextYearFind', function(){
	it('should return next year with different numbers', function(){
		let nextYearF = algolib.nextYearFind(1987);
		nextYearF.should.be.eql(2013);
	});

	it('should return next year with different numbers', function(){
		let nextYearF = algolib.nextYearFind(2019);
		nextYearF.should.be.eql(2031);
	});	

	it('should return a message about wrong number', function(){
		let nextYearF = algolib.nextYearFind(999);
		nextYearF.should.be.eql('Please enter a Number >= 1000 and <= 9000');
	});

	it('should return a message about wrong number', function(){
		let nextYearF = algolib.nextYearFind(null);
		nextYearF.should.be.eql('Please enter a Number >= 1000 and <= 9000');
	});

	it('should return a message about wrong number', function(){
		let nextYearF = algolib.nextYearFind('klkl');
		nextYearF.should.be.eql('Please enter a Number >= 1000 and <= 9000');
	});

	it('should return a message about wrong number', function(){
		let nextYearF = algolib.nextYearFind();
		nextYearF.should.be.eql('Please enter a Number >= 1000 and <= 9000');
	});
})