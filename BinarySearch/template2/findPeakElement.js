/**
 *  Find Peak Element
 * 
    A peak element is an element that is greater than its neighbors.

    Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

    The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

    You may imagine that nums[-1] = nums[n] = -∞.

    Example 1:

    Input: nums = [1,2,3,1]
    Output: 2
    Explanation: 3 is a peak element and your function should return the index number 2.
    Example 2:

    Input: nums = [1,2,1,3,5,6,4]
    Output: 1 or 5 
    Explanation: Your function can return either index number 1 where the peak element is 2, 
                or index number 5 where the peak element is 6.
 */

 /////////////////// SOLUTION /////////////////////////////

 /**
 * Recurvsive find peak solution
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (!nums || !nums.length || nums.length === 1) return 0;
    
    if (nums.length === 2) {
      if (nums[0] < nums[1]) return 1;
      return 0;
    }
    return searchPeakElement(nums, left = 0, right = nums.length-1)
 };
 
 /**
  * 
  * @param {number[]} nums 
  * @param {number} left 
  * @param {number} right 
  * @return {number}
  */
 var searchPeakElement = function(nums, left, right) {
     const mid = Math.floor(left + (right-left)/2);
   
     if (left > right ) return -1;
 
     if (mid === 0 && nums[mid] > nums[mid+1]) return mid;
   
     if (mid === nums.length-1 && nums[mid] > nums[mid-1]) return mid;
   
     if(nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1]) return mid;
    
     if (nums[mid] < nums[mid+1]) {
       // search right
       return searchPeakElement(nums, mid + 1, right);
     } else {
       // search left
       return searchPeakElement(nums, left,  mid);
     }
 }


/**
 * Iterative find peak solution
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (!nums || !nums.length || nums.length === 1) return 0;
    
    if (nums.length === 2) {
      if (nums[0] < nums[1]) return 1;
      return 0;
    }
    let left = 0;
    let right = nums.length;
    while (left <= right) {
      let middle = Math.floor(left + (right - left)/2);
 
      if (middle === 0 && nums[middle] > nums[middle+1]) return middle; 
      
      if (middle === nums.length-1 && nums[middle] > nums[middle-1]) return middle;
      
      if (nums[middle] > nums[middle + 1] && nums[middle] > nums[middle - 1]) return middle;
      
      if (nums[middle] < nums[middle + 1]) {
         left = middle + 1
      } else {
        right = middle;
      }
    }
    return -1;
 };