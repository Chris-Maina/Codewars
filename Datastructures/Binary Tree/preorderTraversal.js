/**
 * 
 Given a binary tree, return the preorder traversal of its nodes' values.
  Example:

  Input: [1,null,2,3]
    1
      \
      2
      /
    3

  Output: [1,2,3]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 // Recursive approach
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let arr = [];
  if (!root) return arr;
  arr = traverse(root, arr);
  return arr;
};

var traverse = (root, arr) => {
  if (root.left === null && root.right === null) {
      arr.push(root.val);
      return arr;  
  }
  arr.push(root.val);
  root.left && traverse(root.left, arr);
  root.right && traverse(root.right, arr);
  return arr;
}

// Iterative approach
var preorderTraversal = function(root) {
  let arr = [];
  if (!root) return arr;
  let previous;
  let current = root;
  while(current) {
    arr.push(current.val);
    if (current.left) {
      previous = current;
      current = current.left;
    }
    if (previous && previous.right) {
      current = previous.right;
    }
    previous = current;
  }
  arr.push(current.val);
  return arr;
}