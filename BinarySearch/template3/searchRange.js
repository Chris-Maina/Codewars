/**
 * Search for a Range
 Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

  Your algorithm's runtime complexity must be in the order of O(log n).

  If the target is not found in the array, return [-1, -1].

  Example 1:

  Input: nums = [5,7,7,8,8,10], target = 8
  Output: [3,4]

  Example 2:

  Input: nums = [5,7,7,8,8,10], target = 6
  Output: [-1,-1]
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums || !nums.length) return [-1, -1];

  const res = [];
  let left = 0;
  let right = nums.length - 1;

  res[0] = searchLeft(nums, target, left, right);
  res[1] = searchRight(nums, target, left, right);
  return res;
};

var searchLeft = function (nums, target, left, right) {
  if (left > right) return -1;

  let mid = Math.floor(left + (right - left) / 2);
  if (nums[mid] === target) {
    if (mid > 0 && nums[mid - 1] === target) {
      return searchLeft(nums, target, left, mid - 1)
    } else {
      return mid;
    }
  }
  if (nums[mid] < target) {
    return searchLeft(nums, target, left + 1, right);
  } else {
    return searchLeft(nums, target, left, right - 1);
  }
}

var searchRight = function (nums, target, left, right) {
  let mid = Math.floor(left + (right - left) / 2);
  if (left > right) return -1;
  if (nums[mid] === target) {
    if (mid + 1 < nums.length && nums[mid + 1] === target) {
      return searchRight(nums, target, mid + 1, right)
    } else {
      return mid;
    }
  }
  if (nums[mid] < target) {
    return searchRight(nums, target, left + 1, right);
  } else {
    return searchRight(nums, target, left, right - 1);
  }
}
