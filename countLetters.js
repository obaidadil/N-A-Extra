const assertEqual = function(actual, expected) {  // getting the function in 
  actual === expected ? console.log(`🟩🟩🟩 Assertion Passed: ${actual} === ${expected}`) : console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(string) {
  let output = {}; // empty objects that will keep the result
  
  for (const char of string) { // loop for the string
    if (char !== ' ') { // make sure it doesnt count spaces
      if (output[char]) {
        output[char]++; // if exists then add
      } else {
        output[char] = 1; // new output 
      }
    }
  }
  return output;
};

console.log(countLetters('Project test code for counting'));
console.log(countLetters('another counting letter and not spaces'));
console.log(countLetters('             Test                 '));

module.exports = countLetters; //export