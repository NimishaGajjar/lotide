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


const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
    console.log(item);
  }

  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

