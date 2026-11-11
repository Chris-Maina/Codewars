/**
  3Sum

  Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
  Find all unique triplets in the array which gives the sum of zero.

  Notice that the solution set must not contain duplicate triplets.

  Example 1:

  Input: nums = [-1,0,1,2,-1,-4]
  Output: [[-1,-1,2],[-1,0,1]]

  Example 2:

  Input: nums = []
  Output: []

  Example 3:

  Input: nums = [0]
  Output: []

 */

 /////////////////////// SOLUTION ///////////////////////
 
/**
 * @param {number[]} nums
 * @return {number[][]}
 * Time complexity: 0(n^2)
 */
var threeSum = function (nums) {
  if (!nums.length || nums.length < 3) return [];
  const res = [];
  let indexMap = {};
  // sort the array
  nums.sort((a, b) => a - b);
  for (let slow = 0; slow < nums.length - 2; slow++) {
    let fast = slow + 1;
    let right = nums.length - 1;
    while (fast < right) {
      const sum = nums[slow] + nums[fast] + nums[right];

      if (sum === 0 &&
        !indexMap[`${nums[slow]}${nums[fast]}${nums[right]}`]
      ) {
        res.push(Array.of(nums[slow], nums[fast], nums[right]));
        // mark triplet as visited
        indexMap[`${nums[slow]}${nums[fast]}${nums[right]}`] = true;
      }
      if (sum > 0) {
        // If sum is greater than 0, reduce/ go to a lesser value
        right--;
      } else {
        // If sum is less than 0, increase/go to a higher value
        fast++;
      }
    }
  }
  return res;
};