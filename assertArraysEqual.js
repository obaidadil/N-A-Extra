import eqArrays from './eqArrays';   // Import the eqArray function 

const assertArraysEqual = function(arr1, arr2) {   //this functuon will check if the 2 arrays are equal
  let result = eqArrays(arr1, arr2);
  result ? console.log(`🟩🟩🟩 Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🟥🟥🟥 Assertion Failed: ${arr1} !== ${arr2}`);
};

export default assertArraysEqual; // function export 