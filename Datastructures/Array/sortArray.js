/**
 *  Sort an Array
  Given an array of integers nums, sort the array in ascending order.

  Example 1:

  Input: nums = [5,2,3,1]
  Output: [1,2,3,5]

  Example 2:

  Input: nums = [5,1,1,2,0,0]
  Output: [0,0,1,1,2,5]

  Constraints:

    1 <= nums.length <= 50000
    -50000 <= nums[i] <= 50000


 */

 /////////////////////// SOLUTION /////////////////////// 
 
/**
 * This solution uses merge sort
 * Time complexity: O(n log n)
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (!nums || nums && !nums.length) return nums;
  return divideAndMerge(nums);
};

/**
 * Divides nums into 2 halves
 * @param {number[]} nums
 * @return {number[]}
 */
const divideAndMerge = (nums) => {
  // terminate when there's one element in array
  if (!nums.length || nums.length === 1) return nums;

  // get middle of array
  const middle = Math.floor(nums.length / 2);

  const leftArr = divideAndMerge(nums.slice(0, middle));
  const rightArr = divideAndMerge(nums.slice(middle, nums.length));
  return mergeAndSort(leftArr, rightArr);

}

/**
 * Merges arr1 and arr2 into newArr
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const mergeAndSort = (arr1, arr2) => {
  const newArr = [];
  let arr1pointer = 0;
  let arr2pointer = 0;

  while (arr2pointer < arr2.length && arr1pointer < arr1.length) {
    if (arr1[arr1pointer] < arr2[arr2pointer]) {
      newArr.push(arr1[arr1pointer]);
      arr1pointer++;
    } else {
      newArr.push(arr2[arr2pointer]);
      arr2pointer++;
    }
  }

  if (arr2pointer === arr2.length) {
    newArr.push(...arr1.slice(arr1pointer))
  }

  if (arr1pointer === arr1.length) {
    newArr.push(...arr2.slice(arr2pointer))
  }

  return newArr;
}
 
///////////// OR //////////////

/**
 * This solution uses heap sort
 * Time complexity: O(n log n)
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (!nums || nums && nums.length === 0) return nums;
  const length = nums.length;
  /**
   * Generate a max heap
   * From the end of the array, swap the first and last elements
   * descrease
   * sift down
   */
  heapify(nums, length)
  let end = length - 1;
  while (end >= 0) {
    swap(nums, 0, end);
    end -= 1;
    // Unsorted array is from 0 - end
    siftDown(nums, 0, end);
  }

  return nums;
}

/**
 * Builds a max heap
 * @param {number[]} arr 
 * @param {number} count
 */
const heapify = (arr, count) => {
  // get the parent of the last item in the array
  let start = isParent(count - 1);

  while (start >= 0) {
    siftDown(arr, start, count - 1);
    start -= 1;  
  }
}

/**
 * 
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 */
const siftDown = (arr, start, end) => {
  let root = start;

  while(isLeftChild(root) <= end) {
    let child = isLeftChild(root);
    let bigest = root;

    // compare the parent and left child
    if (arr[bigest] < arr[child]) {
      bigest = child;
    }

    // check if there is a right child, compare
    if (child + 1 <= end && arr[bigest] < arr[child + 1]) {
      bigest = child + 1;
    }

    if (arr[bigest] === arr[root]) return;
    swap(arr, bigest, root);
    root = bigest;
  }
}

/**
 * Swaps elements in the array
 * @param {number[]} arr
 * @param {number} firstIndex 
 * @param {number} secondIndex 
 */
const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

const isParent = index => Math.floor((index - 1) / 2);
const isLeftChild = index => 2 * index + 1;
const isRightChild = index => 2 * index + 2;

console.log(mergeAndSort([-2], [-5, 3]));