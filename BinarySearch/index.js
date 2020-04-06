/*
 *
    Given a sorted (in ascending order) integer array nums of n elements and a target value,
    write a function to search target in nums. If target exists, then return its index, otherwise return -1.

    Example 1:

    Input: nums = [-1,0,3,5,9,12], target = 9
    Output: 4
    Explanation: 9 exists in nums and its index is 4

    Example 2:

    Input: nums = [-1,0,3,5,9,12], target = 2
    Output: -1
    Explanation: 2 does not exist in nums so return -1
 */

 ////////////////////// SOLUTION /////////////////

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    return binarySearch(nums, target, left = 0, right = nums.length - 1);
};

/**
 * Performs a Binary search. Compares target value to the middle element of nums.
 * If they are not equal, the half in which the target cannot lie is eliminated.
 * Search continues in the remaining half, again taking the middle element
 * to compare with the target, repeating until the target value is found.
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @param {number} left 
 * @param {number} right 
 */
var binarySearch = function (nums, target, left, right) {
    if (left > right) return -1;
    const middle = Math.floor((left + right) / 2);
    if (target === nums[middle]) {
        return middle;
    } else if (target < nums[middle]) {
        return binarySearch(nums, target, left, middle - 1);
    } else {
        return binarySearch(nums, target, middle + 1, right);
    }
}
