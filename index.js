'use strict';

let bubbleSort = require('./bubble-sort');
let coverByTile = require('./entry-test/coverByTile');
let UnionFind = require ('./unionFind');
let nextYearFind = require('./entry-test/nextYearFind');
let watermelon = require('./entry-test/watermelon');
let linkedList = require('./linked-list');

let algolib = {
    bubbleSort,
    coverByTile,
    nextYearFind,
    watermelon,
    linkedList,
    UnionFind
}

module.exports = algolib;
