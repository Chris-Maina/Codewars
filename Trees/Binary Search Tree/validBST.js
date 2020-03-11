/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

 - The left subtree of a node contains only nodes with keys less than the node's key.
 - The right subtree of a node contains only nodes with keys greater than the node's key.
 - Both the left and right subtrees must also be binary search trees.

 Examples
   2
   / \
  1   3

Input: [2,1,3]
Output: true

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var traverse = function(root, upperlimit) {
  if ((root.left && root.left.val >= upperlimit) ||  (root.right && root.right.val <= upperlimit)) return false
   
  if (root.left && root.left.val < root.val) {
      traverse(root.left, upperlimit)
  }
   if (root.right && root.right.val > root.val) {
      traverse(root.right, upperlimit)
   }
   return true;
}

var isValidBST = function(root) {
   if (!root) return true;
   return traverse(root, upperlimit=root.val);
};