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