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

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: Arrays are equal.`);

  } else {
    console.log(`❌❌❌ Assertion Failed: Arrays are NOT equal.`);
  }
};

module.exports = assertArraysEqual;

const middle = function (array) {
  const midIndex = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return [];

  } else if (array.length % 2 === 0) {
    return [array[midIndex - 1], array[midIndex]];

  } else {
    return [array[midIndex]];
  }

};

module.exports = middle;
