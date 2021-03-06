/*
Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if(!nums.length) return;
  let maxEndingAtIndex = 0;
  let maxSoFar = 0;
  for (let i = 0; i<nums.length; i++) {
    maxEndingAtIndex += nums[i];
    if (maxEndingAtIndex < 0) {
      maxEndingAtIndex = 0;
    }

    if (maxEndingAtIndex > maxSoFar) {
      maxSoFar = maxEndingAtIndex;
    }
  }
  return maxSoFar;
};
