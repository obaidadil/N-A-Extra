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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//test codes
const results1 = map(words, word => word[0]);
console.log(results1);

//change strings
const str = ['Tell', 'Me', 'Why','Aint','Nothing' ];
const result3 = map(str, x => x + 'all');
assertArraysEqual(result3, ['Tellall', 'Meall', 'Whyall','Aintall','Nothingall' ]);

//multiply numbers
const num = [0, 1, 2, 4, 5, 9];
const result2 = map(num, x => x * 3);
assertArraysEqual(result2, [0, 3, 6, 12, 15, 27]);

//change objects
const obj = [{class: 'Slim', color: "green", type: 33}, {class: 'Shady', color: 'white', type: 44}];
const result4 = map(obj, x => {
  return x.class;
});
console.log(result4);

export default map;