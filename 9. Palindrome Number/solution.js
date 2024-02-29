/**
 * @param {number} x
 * @return {boolean}
 */

/**
 * Mod Example 
 * 121 ÷ 10 = 12.1
 * 12 × 10 = 120
 * 121 - 120 = 1
 */
 
var isPalindrome = function(x) {
  if (x < 0) {
    return false; // Negative numbers are not palindromes
  }
  let reversedNum = 0; // Initialize variable to store the reversed number
  const originalNum = x; // Store the original number for comparison later
  while (x > 0) {
    const digit = x % 10; // Extract the last digit of the number
    reversedNum = reversedNum * 10 + digit; // Build the reversed number by adding digits
    x = Math.floor(x / 10); // Remove the last digit from the original number
  }
  return originalNum === reversedNum; // Check if the original number is equal to its reversed form
};