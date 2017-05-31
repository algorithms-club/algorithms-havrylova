'use strict';

let bubbleSort = require('./bubble-sort');
let coverByTile = require('./entry-test/coverByTile');
let nextYearFind = require('./entry-test/nextYearFind');
let watermelon = require('./entry-test/watermelon');
let sort = require('./sort');
let UnionFind = require ('./unionFind');
let linkedList = require('./linked-list');


let algolib = {
    bubbleSort,
    coverByTile,
    nextYearFind,
    watermelon,
    sort,
    linkedList,
    UnionFind
};

module.exports = algolib;
