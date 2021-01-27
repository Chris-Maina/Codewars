/*
  Given an array of integers, find if the array contains any duplicates.
  Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

  Example 1:

  Input: [1,2,3,1]
  Output: true

  Example 2:

  Input: [1,2,3,4]
  Output: false

  Example 3:

  Input: [1,1,1,3,3,4,3,2,4,2]
  Output: true
*/

/////////////////////// SOLUTION ///////////////////////

/**
 * This solution uses a hash map since search and insert are both O(1)
 * Time complexity: O(n)
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  if (!nums || (nums && !nums.length)) return false;
  const elMap = {};
  for (let index = 0; index < nums.length; index++) {
    let current = nums[index];
    if (elMap[current]) return true;
    elMap[current] = true;
  }
  return false;
};

/**
 * This solution first sorts the input array, then checks for duplicates
 * Sorting has O(n log n) worst case performance and looping has O(n)
 * Time complexity: O(n log n)
 * @param {number[]} nums
 * @returns {boolean} 
 */
const containsDuplicate = (nums) => {
  if (!nums || (nums && !nums.length)) return false;

  // sort
  nums.sort();
  for (let index = 0; index < nums.length - 1; index++) {
    if (nums[index] === nums[index + 1]) return true;
  }
  return false;
}
