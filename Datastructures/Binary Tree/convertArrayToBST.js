/**
 * 
  Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

  For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

  Example:

  Given the sorted array: [-10,-3,0,5,9],

  One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
*/

/////////////////////// SOLUTION ///////////////////////

/**
 * 
 * @param {number} val 
 * @param {Node | null} left 
 * @param {Node | null} right 
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

var sortedArrayToBST = function (nums) {
  // Return the root
  return buildTree(nums);
};

function buildTree(nums) {
  if (!nums.length) return null;

  const low = 0;
  const high = nums.length - 1;
  const mid = Math.round(low + (high - low) / 2);
  const root = new TreeNode(nums[mid], null, null);

  root.left = buildTree(nums.slice(0, mid));
  root.right = buildTree(nums.slice(mid + 1, nums.length));
  return root;
}
