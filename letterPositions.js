const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  result ? console.log(`🟩🟩🟩 Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🟥🟥🟥 Assertion Failed: ${arr1} !== ${arr2}`);
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {

      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

//test code for string 'lighthouse in the house'
const sentence = 'Test string to test the code';
const expected = {
  w: [9],
  i: [1, 11,23,3,6],
  n: [87,32,56],
  n: [3, 5, 15, 18],
  e: [49, 27,34,54],
  r: [11, 99,88],
  a: [22, 33,29],
  d: [65, 34],
  i: [18, 12, 32],
  l: [25,43]
};

const result = letterPositions(sentence);
console.log(result);
for (const key in expected) {
  if (result[key] === undefined) {
    assertArraysEqual([], expected[key]);
  } else {
    assertArraysEqual(result[key], expected[key]);
  }
}
module.exports = letterPositions;