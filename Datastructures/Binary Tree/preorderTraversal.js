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
/**
 * Pushes the root node, followed by right and lastly left node.
 * right child is pushed first so that left is processed first
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const arr = [];
  const stack = [];
  if (!root) return arr;
  stack.push(root);
  while(stack.length) {
    let current = stack.pop();
    arr.push(current.val);
    current.right && stack.push(current.right);
    current.left && stack.push(current.left);
  }
  return arr;
}