/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // Create an empty object to store numbers and their indices
  const numToIndex = {};
  
  // Loop through the array 'nums'
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement for the current number
    const complement = target - nums[i];
    
    // Check if the complement exists in 'numToIndex'
    if (numToIndex.hasOwnProperty(complement)) {
        // If the complement exists, return the indices of the current number and its complement
        return [numToIndex[complement], i];
    }
    
    // If the complement doesn't exist, store the current number and its index in 'numToIndex'
    numToIndex[nums[i]] = i;
  }
};