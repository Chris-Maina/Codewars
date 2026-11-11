/**
 * Single Number
  Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

  Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
  Example 1:

  Input: nums = [2,2,1]
  Output: 1

  Example 2:

  Input: nums = [4,1,2,1,2]
  Output: 4

  Example 3:

  Input: nums = [1]
  Output: 1

  Constraints:

    1 <= nums.length <= 3 * 104
    -3 * 104 <= nums[i] <= 3 * 104
    Each element in the array appears twice except for one element which appears only once.

 */

/**
 * This solution uses the XOR gate, a digital logic gate that gives a true (1 or HIGH)
 * output when the number of true inputs is odd. i.e 0 XOR 1 or 1 XOR 0.
 * - If we take XOR of zero and some bit, it will return that bit i.e a XOR 0 = a
 * - If we take XOR of two same bits, it will return 0 i.e. a XOR a= 0
 * - If take 3 or more bits like in Example 1 i.e. a XOR b XOR a it will return
 *  a XOR b XOR a =(a XOR a) XOR b= 0 XOR b = b OR 
 *  a XOR b XOR a =(a XOR b) XOR a = b
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let unique = 0;
  for (let index = 0; index < nums.length; index++) {
    unique = unique ^ nums[index];
  }
  return unique;
}

/**
 * This solution uses a hash table. First populates the hash table with 
 * value count, then loops to get the value with a count of 1 (unique)
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let valueCount = {};
  for (let index = 0; index < nums.length; index++) {
    if (valueCount[nums[index]]) {
      valueCount[nums[index]] = valueCount[nums[index]] + 1
    } else {
      valueCount[nums[index]] = 1
    }
  }

  for (let index = 0; index < nums.length; index++) {
    if (valueCount[nums[index]] === 1) return nums[index];
  }
  // will never get here because of the last constraint
  return 0;
};