const eqArrays = (arr1, arr2) => {       // create function for arrays
  if (arr1.length !== arr2.length) {       // arr1 isnt equal to arr2 due to the fact both have different lengths
      return false;
  } else {
      for (let i = 0; i < arr1.length; i ++) {   // running the loop through arr1
          if (arr1[i] !== arr2[i]) { //make sure arr1 and arr2 isnt equal so this function returns the correct value 
              return false;
          }
      }
      return true; // unless both arrays are equal then return true.
  }
}

export default eqArrays;  // exporting the function