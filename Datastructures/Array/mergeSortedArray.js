/**
 * Merge Sorted Array

  Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

  The number of elements initialized in nums1 and nums2 are m and n respectively.
  You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

  Example 1:

  Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
  Output: [1,2,2,3,5,6]

  Example 2:

  Input: nums1 = [1], m = 1, nums2 = [], n = 0
  Output: [1]

  Constraints:

    0 <= n, m <= 200
    1 <= n + m <= 200
    nums1.length == m + n
    nums2.length == n
    -109 <= nums1[i], nums2[i] <= 109
*/

/////////////////////// SOLUTION ///////////////////////
/**
 * 
 * @param {*} nums1 
 * @param {*} m 
 * @param {*} nums2 
 * @param {*} n 
 * Time complexity: O(n)
 */
var merge = (nums1, m, nums2, n) => {
  let nums1pointer = m - 1;
  let nums2pointer = n - 1;
  const len = m + n - 1;

  for (index = len; index >= 0; index--) {
    if (nums2pointer < 0) break;

    if (nums1pointer >= 0 && nums1[nums1pointer] > nums2[nums2pointer]) {
      nums1[index] = nums1[nums1pointer];
      nums1pointer--;
    } else {
      nums1[index] = nums2[nums2pointer];
      nums2pointer--;
    }
  }
  return nums1;
}

// console.log(merge([1, 4, 5, 0, 0, 0], 3, [2, 3, 6], 3))
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
