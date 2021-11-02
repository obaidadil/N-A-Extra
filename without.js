const without = (arr, toRemove) => {
  let newArray = [];
  for (item of arr) {
      if (!toRemove.includes(item)) {
          newArray.push(item);
      }
  }
  return newArray;
}


/*const assertArraysEqual = function(arr1, arr2) {   //this functuon will check if the 2 arrays are equal
  let result = eqArrays(arr1, arr2);
  result ? console.log(`🟩🟩🟩 Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🟥🟥🟥 Assertion Failed: ${arr1} !== ${arr2}`);
};

// const eqArrays = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false;
//     } else {
//         for (let i = 0; i < arr1.length; i ++) {
//             if (arr1[i] !== arr2[i]) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;
*/