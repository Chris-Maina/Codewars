/**
 * Two Sum
 
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 You may assume that each input would have exactly one solution, and you may not use the same element twice.
 You can return the answer in any order.

 Example 1:

 Input: nums = [2,7,11,15], target = 9
 Output: [0,1]
 Output: Because nums[0] + nums[1] == 9, we return [0, 1].

 Example 2:

 Input: nums = [3,2,4], target = 6
 Output: [1,2]

 Example 3:

 Input: nums = [3,3], target = 6
 Output: [0,1]

 Constraints:
    2 <= nums.length <= 103
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.
 */

/**
 * Two-pass Hash Table
 * This implementation uses 2 iterations. In the first iteration, 
 * we add each element's value and its index to the indexMap hash table.
 * In the second iteration we check if each element's value (target−nums[i]) exists in the table.
 *
 * Time complexity: 0(n). Traverse the list containing n elements twice. Use the hash table to reduce
 * lookup time to 0(1).
 * Space complexity : O(n). The extra space required depends on the number of items stored in the hash table,
 * which stores exactly nnn elements
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // create an index map
  let indexMap = {};
  for (let index = 0; index < nums.length; index++) {
    if (indexMap[nums[index]]) {
      indexMap[nums[index]].push(index)
    } else {
      indexMap[nums[index]] = [index]
    }
  }
  for (let index = 0; index < nums.length; index++) {
    let curr = nums[index];
    let value = target - curr;
    if (indexMap[value] &&
      indexMap[value].length &&
      indexMap[value][indexMap[value].length - 1] !== index // Check if index is not the current operand
    ) return [index, indexMap[value].pop()]
  }
};


/**
 * One-pass Hash Table
 * While we iterate, we insert elements into the hash table.
 * We also look back to check if the complement (target−nums[i]) already exists.
 * If it exists, we have found a solution and return immediately.
 * Time complexity : O(n)
 * Space complexity : O(n). The extra space required depends on the number of items
 * stored in the hash table, which stores at most nnn elements.
 * @param {number[]} nums
 * @param {number} target
 *
 */
var twoSum = function (nums, target) {
  let indexMap = {};
  for (let index = 0; index < nums.length; index++) {
    let value = target - nums[index];
    if (indexMap[value] !== undefined) {
      return [index, indexMap[value]]
    }
    indexMap[nums[index]] = index;
  }
}