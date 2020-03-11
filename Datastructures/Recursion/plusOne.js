/**
 * 
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
Explanation: The array represents the integer 6145390195186705543.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // If the last digit is less than 9 add one and return
  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1]++;
    return digits;
  }

  return addOne(digits, digits.length - 1);
};

/**
 * 
 * @param {Array} arr 
 * @param {Number} post 
 * Replaces the last index with 0 and add 1 to the previous position if its less than 9.
 * Else replace the previous number with 0 and repeat. 
 */
var addOne = function(arr, post) {
  // if arr[post] is undefined add 1 at the first index.
  if (!arr[post]) {
    arr.unshift(1);
    return arr;
  }
  if (arr[post] < 9) {
    arr[post]++;
    return arr;
  }
  arr[post] = 0;
  return addOne(arr, post - 1);
};
