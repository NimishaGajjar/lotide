const eqArrays = require('./eqArrays');

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: Arrays are equal.`);

  } else {
    console.log(`❌❌❌ Assertion Failed: Arrays are NOT equal.`);
  }
};

module.exports = assertArraysEqual;

const eqArrays = function (arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        if (!eqArrays(arr1[i], arr2[i])) {
          return false;
        }
      } else if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
};

module.exports = eqArrays;

assertArraysEqual(letterPositions("hello").e, [1]);


const letterPositions = function (string) {
  const results = {};

  for (const [index, letter] of string.split('').entries()) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
  }

  return results;
};

module.exports = letterPositions;

