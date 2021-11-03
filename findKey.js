const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🟩🟩🟩 Assertion Passed: ${actual} === ${expected}`) : console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = function(object, callback) { // this is for looping through the objects
  for (const key in object) {
    const value = object[key]; // this should get the value of the key
    if (callback(value)) return key; // if key is returned callback should say true
  }
  return undefined;   // if cant find the right key
};


/*assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');

*/

export default findKey;