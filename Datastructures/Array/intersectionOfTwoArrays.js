/**
 * Intersection of Two Arrays II
  
  Given two arrays, write a function to compute their intersection.

  Example 1:

  Input: nums1 = [1,2,2,1], nums2 = [2,2]
  Output: [2,2]

  Example 2:

  Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  Output: [4,9]

  Note:

      Each element in the result should appear as many times as it shows in both arrays.
      The result can be in any order.

  Follow up:

      What if the given array is already sorted? How would you optimize your algorithm?
      What if nums1's size is small compared to nums2's size? Which algorithm is better?
      What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
 */

  /////////////////////// SOLUTION /////////////////////// 
/**
 * Time complexity: O(n)
 * Space complexity: 0(n)
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number[]}
*/
var intersect = function (nums1, nums2) {
  const valueMap = {};
  const result = [];

  if (!nums1.length || !nums2.length) return result;
  // make sure nums1 is bigger
  if (nums2.length > nums1.length) return intersect(nums2, nums1);
  
  for (let index = 0; index < nums1.length; index++) {
    if (valueMap[nums1[index]]) {
      valueMap[nums1[index]] += 1
    } else {
      valueMap[nums1[index]] = 1;
    }
  }

  for (let index = 0; index < nums2.length; index++) {
    if (valueMap[nums2[index]] > 0) {
      result.push(nums2[index]);
      valueMap[nums2[index]] -= 1;
    }
  }
  return result;
};

/**
 * Time complexity: O(n log n)
 * Space complexity: 0(n)
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number[]}
*/
var intersect = function(nums1, nums2) {
    const result = [];
    if (!nums2 || !nums2.length || !nums1 || !nums1.length) return result;
    // Sorting has O(n log n)
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let pointer1 = 0;
    let pointer2 = 0;

    while (nums1[pointer1] !== undefined && nums2[pointer2] !== undefined) {
         if (nums1[pointer1] === nums2[pointer2]) {
             result.push(nums1[pointer1])

             pointer2 += 1;
             pointer1 += 1;
         } else if (nums1[pointer1] < nums2[pointer2]) {
             pointer1 += 1;
         } else {
             pointer2 += 1;
         }
    }
    return result;
}