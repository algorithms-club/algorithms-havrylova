'use strict';

const algolib = require('../index.js');

describe('#watermelon', function(){
    it('should show that watermelon could be divided into to even pieces', function(){
        let melonWeight = algolib.watermelon(18);
        melonWeight.should.be.eql('YES');
    });

    it('should show that watermelon couldn\'t be divided into to even pieces', function(){
        let melonWeight = algolib.watermelon(55);
        melonWeight.should.be.eql('NO');
    });

    it('should show that watermelon couldn\'t be divided into to even pieces', function(){
        let melonWeight = algolib.watermelon(2);
        melonWeight.should.be.eql('NO');
    });

    it('should show the message about wrong number', function(){
        let melonWeight = algolib.watermelon();
        melonWeight.should.be.eql('Please enter a Number >= 1 and <= 100');
    });

    it('should show the message about wrong number', function(){
        let melonWeight = algolib.watermelon(500);
        melonWeight.should.be.eql('Please enter a Number >= 1 and <= 100');
    });


});