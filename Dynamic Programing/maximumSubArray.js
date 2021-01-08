/**
 * Maximum Subarray
 * 
  Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

  Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

  Example 1:

  Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
  Output: 6
  Explanation: [4,-1,2,1] has the largest sum = 6.

  Example 2:

  Input: nums = [1]
  Output: 1

  Example 3:

  Input: nums = [0]
  Output: 0

  Example 4:

  Input: nums = [-1]
  Output: -1

  Example 5:

  Input: nums = [-2147483647]
  Output: -2147483647



  Constraints:

    1 <= nums.length <= 2 * 104
    -231 <= nums[i] <= 231 - 1

 */

  /////////////////////// SOLUTION ///////////////////////

/**
 * This solution uses Kadane's algortithm
 * Time complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let bestSum = Number.MIN_SAFE_INTEGER;
  let currentSum = Number.MIN_SAFE_INTEGER;
  let start = 0;
  let end = 0;
  for (let index = 0; index < nums.length; index++) {
    if (currentSum <= 0) {
      start = index;
      currentSum = nums[index]
    } else {
      currentSum += nums[index]
    }

    if (currentSum > bestSum) {
      bestSum = currentSum;
      end = index;
    }
  }
  return bestSum;
};

/**
 * This solution uses Divide and Conquer
 * Time complexity: O(nLogn)
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
  if (!nums) return 0
  return maxSumInArr(nums, 0, nums.length - 1);
}

/**
 * Divides the array, gets the left, right and crossing sum and returns the largest
 * @param {number[]} nums 
 * @param {number} left 
 * @param {number} right
 * @returns {number}
 */
const maxSumInArr = (nums, left, right) => {
  if (left === right) return nums[left];

  const mid = Math.floor((right + left) / 2);
  let leftSubArrMax = maxSumInArr(nums, left, mid);
  let rightSubArrMax = maxSumInArr(nums, mid + 1, right);
  let centerSubArrMax = maxCrossingSum(nums, left, right, mid);
  return Math.max(
    leftSubArrMax,
    rightSubArrMax,
    centerSubArrMax
  )
}

/**
 * Gets the sum of elements between mid - 1, and mid + 1
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @param {number} mid
 * @return {number}
 */
const maxCrossingSum = (nums, left, right, mid) => {
  let leftSum = Number.MIN_SAFE_INTEGER;
  let rightSum = Number.MIN_SAFE_INTEGER;
  // Sum numbers on the left of mid
  let currentSum = 0;
  for (let index = mid; index >= left; index--) {
    currentSum += nums[index];
    leftSum = Math.max(leftSum, currentSum);
  }

  // Sum numbers on the right of mid
  currentSum = 0;
  for (let index = mid + 1; index <= right; index++) {
    currentSum += nums[index];
    rightSum = Math.max(rightSum, currentSum);
  }

  // Return sum of elements on left and right of mid 
  // returning only left_sum + right_sum will fail for [-2, 1] 
  return Math.max(leftSum, rightSum, rightSum + leftSum);
}