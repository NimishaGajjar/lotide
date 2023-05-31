const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const findKeyByValue = function (object, value) {
  for (const key in object) {
    if (object[key] === value) {
      const findKeyByValue = function (object, value) {
        return undefined;
      };
    }
  }
}

const soccerTeamsFromCountry = {
  spain: 'Barcelona',
  england: 'Liverpool',
  germany: 'Bayern',
  turkey: 'Galatasaray'
};

assertEqual(findKeyByValue(soccerTeamsFromCountry, 'Liverpool'), 'england');
assertEqual(findKeyByValue(soccerTeamsFromCountry, 'Galatasaray'), 'turkey');
assertEqual(findKeyByValue(soccerTeamsFromCountry, 'Ajax'), undefined);
