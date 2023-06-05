// const head = require('./head');
// const tail = require('./tail');
// const middle = require('./middle');

// module.exports = {
//   head: head,
//   tail: tail,
//   middle: middle
// };

// // console.log(head([1, 2, 3])); // => 1
// // console.log(tail([1, 2, 3])); // => [2, 3]

const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const head = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const tail = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  head,
  letterPositions,
  map,
  middle,
  tail,
  takeUntil,
  without
};
// console.log(head([1, 2, 3])); // => 1
// console.log(tail([1, 2, 3])); // => [2, 3]
// console.log(middle([1, 2, 3]));
