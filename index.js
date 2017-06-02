'use strict';

let bubbleSort = require('./entry-test/bubble-sort');
let coverByTile = require('./entry-test/coverByTile');
let UnionFind = require ('./entry-test/unionFind');
let nextYearFind = require('./entry-test/nextYearFind');
let watermelon = require('./entry-test/watermelon');
let linkedList = require('./entry-test/linked-list');

let algolib = {
    bubbleSort,
    coverByTile,
    nextYearFind,
    watermelon,
    linkedList,
    UnionFind
};

module.exports = algolib;
