/*
  Given an array, rotate the array to the right by k steps, where k is non-negative.

  Follow up:

    Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
    Could you do it in-place with O(1) extra space?

  Example 1:

  Input: nums = [1,2,3,4,5,6,7], k = 3
  Output: [5,6,7,1,2,3,4]
  Explanation:
  rotate 1 steps to the right: [7,1,2,3,4,5,6]
  rotate 2 steps to the right: [6,7,1,2,3,4,5]
  rotate 3 steps to the right: [5,6,7,1,2,3,4]

  Example 2:

  Input: nums = [-1,-100,3,99], k = 2
  Output: [3,99,-1,-100]
  Explanation:
  rotate 1 steps to the right: [99,-1,-100,3]
  rotate 2 steps to the right: [3,99,-1,-100]
*/

/////////////////////// SOLUTION ///////////////////////

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * Time complexity: O(n). unshift() has O(n) and items are unshifted k times i.e O(n * k)
 */
var rotate = function (nums, k) {
  while (k > 0) {
    nums.unshift(nums.pop());
    k--;
  }
  return nums;
};

/**
 * Time complexity: O(n). All the numbers are shifted by one step(O(n)) k times i.e O(n * k)
 * k is constant.
 * @param {number[]} nums 
 * @param {number} k 
 */
const rotate = (nums, k) => {
 for(let count = 0; count < k; count++) {
   // save the last item
   let previous = nums[nums.length - 1];
   // shift elements to the right
   for (let index = 0; index < nums.length; index++) {
     let temp = nums[index];
     nums[index] = previous;
     previous = temp;
   }
 }
}

/**
 * This solution uses a new array to place each element at index i on the original array,
 * at i + k. Then copies the new array to the original array.
 * @param {number[]} nums
 * @param {number} k
 */
const rotate = (nums, k) => {
  const newNums = Array.from({ length: nums.length });
  for (let index = 0; index < nums.length; index++) {
    let newIndex = (index + k) % nums.length;
    newNums[newIndex] = nums[index];
  }

  for (let index = 0; index < nums.length; index++) {
    nums[index] = newNums[index]
  }
  return nums;
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))