const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🟩🟩🟩 Assertion Passed: ${actual} === ${expected}`) : console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const objOneKey = Object.keys(object1);
  const objTwoKey = Object.keys(object2);
  if (objOneKey.length !== objTwoKey.length) return false;
  for (const key of objOneKey) {
    if (Array.isArray(object1[key]) === true) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof(object1[key]) === 'object') {
      if (eqObjects(object1[key], object2[key]) === false) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) return false;
    }
  }
  return true;
};

//test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
/*  */
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const cdd = { c: "1", d: ["2", 3] };
const ddc = { d: ["2", 3], c: ["1"] };
assertEqual(eqObjects(cdd, ddc), false); // => false
const cdd2 = { c: "1", d: 2 };
assertEqual(eqObjects(cdd, cdd2), false); // => false

export default eqObjects;