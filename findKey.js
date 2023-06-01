// ASSERT FUNCTIONS
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};


const trackLevel = {
  "Blue Hill": { stars: 1, difficulty: 2 },
  "Akaleri": { stars: 3, difficulty: 3 },
  "noma": { stars: 2, difficulty: 1 },
  "elBulli": { stars: 3, difficulty: 5 },
  "Ora": { stars: 2, difficulty: 4 },
  "Akelarre": { stars: 3, difficulty: 2 }
};

assertEqual(findKey(trackLevel, track => track.difficulty > 4), 'Ora');
