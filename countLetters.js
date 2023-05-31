const assertEqual = function (actual, expected, suppressLogging = false) {
  if (actual === expected) {
    if (!suppressLogging) {
      console.log(`✅  Assertion Passed: ${actual} === ${expected}`);
    }
    return true;
  } else {
    if (!suppressLogging) {
      console.log(`🛑  Assertion Failed: ${actual} !== ${expected}`);
    }
    return false;
  }
};


module.exports = assertEqual;

const countLetters = function (string) {
  let letterCount = {};

  for (const letter of string) {
    if (letter !== ' ') {
      letterCount[letter] = letterCount[letter] + 1 || 1;
    }
  }

  return letterCount;
};

const result1 = countLetters('Gajjar');

assertEqual(result1['G'], 1);
assertEqual(result1['j'], 2);
assertEqual(result1['P'], undefined);

const result2 = countLetters('my name is Nimi');

assertEqual(result2['m'], 3);
assertEqual(result2['y'], 1);
assertEqual(result2['j'], undefined);

module.exports = countLetters;