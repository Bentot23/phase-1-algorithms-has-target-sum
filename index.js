function hasTargetSum(array, target) {
  // Write your algorithm here
  for(i=0;i<array.length;i++) {
    for(j=i+1;j<array.length;j++){
      if(array[i] + array[j] === target) {
        return true
      }
    } 
  } return false
}

/* 
  Write the Big O time complexity of your function here

  Time complexity of this function should be quadratic: O(n^2)
*/

/* 
  Add your pseudocode here

  It should return true if any pair of numbers in the array
  adds up to the target number
  If array + array is equal to target
  return true
  false otherwise
*/
  
/*
  Add written explanation of your solution here
  
  I need to iterate to the given array by using for loop method and giving each component 
  an index value of i and j;
  [i] index should start at 0 index while [j] will start at 1 index;
  if sum of [i] and [j] will be equal to the given target, the function should
  return true,
  if nothing in the array values will sum up to the given target, then function should
  return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
