'use strict';

const algolib = require('../index.js');

describe.only('#sort', function() {
    it('should create proper datastructure', function(){
        let sort = new algolib.sort();
		sort.isSorted.should.be.instanceOf(Function);
    });

    it('should #isSorted return true if elements in array are sorted', function() {
        let sort = new algolib.sort();
        let arr = [2,5,8,12];
        let isArraySorted  = sort.isSorted(arr);
        isArraySorted.should.be.true();
    });

    it('should #isSorted return false if elements in array are sorted', function() {
        let sort = new algolib.sort();
        let arr = [2,9,8,1];
        let isArraySorted  = sort.isSorted(arr);
        isArraySorted.should.be.false();
    });

    it('should #isSorted return true if elements in array are sorted', function() {
        let sort = new algolib.sort();
        let arr = [1,1,1,1];
        let isArraySorted  = sort.isSorted(arr);
        isArraySorted.should.be.true();
    });

    it('should #isSorted ', function() {
        let sort = new algolib.sort();
        let arr = [1,5,8,12,18];
        let isArraySorted  = sort.isSorted(arr);
        isArraySorted.should.be.true();
        sort.shuffle(arr);
        let isArray2Sorted  = sort.isSorted(arr);
        isArray2Sorted.should.be.false();
    });

    it('should #selectSort returns true', () => {
        let sort = new algolib.sort();
        let arr = [37, 2, 8, 66, 8 , 42, 11];
        let sortedArray = sort.selectionSort(arr);

        sort.isSorted(sortedArray).should.be.true();
    });

    it('should #selectSort returns true after shuffled', () => {
        let sort = new algolib.sort();
        let arr = [37, 2, 8, 66, 8 , 42, 11];
        let sortedArray = sort.selectionSort(arr);
        sort.isSorted(sortedArray).should.be.true();

        let shuffledArray = sort.shuffle(sortedArray);

        let newSortedArray = sort.selectionSort(shuffledArray);

        sort.isSorted(newSortedArray).should.be.true();
    });

    it('should #shellSort returns true', () => {
        let sort = new algolib.sort();
        let arr = [12, 8, 14, 6, 4, 9, 1, 8, 13, 5, 11, 3, 18, 3, 10, 9];
        let sortedArray = sort.shellSort(arr);
        sort.isSorted(sortedArray).should.be.true();

    });

    it('should #shellSort returns true after shuffled', () => {
        let sort = new algolib.sort();
        let arr = [12, 8, 14, 6, 4, 9, 1, 8, 13, 5, 11, 3, 18, 3, 10, 9];
        let sortedArray = sort.shellSort(arr);
        sort.isSorted(sortedArray).should.be.true();

        let shuffledArray = sort.shuffle(sortedArray);

        let newSortedArray = sort.shellSort(shuffledArray);

        sort.isSorted(newSortedArray).should.be.true();
    });
});