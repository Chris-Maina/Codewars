/*
  Given a binary tree, find its maximum depth.

  The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

  Note: A leaf is a node with no children.

  Example:

  Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

  return its depth = 3.
 */

/**
 * Depth of tree = height of tree
 * This solution calculates the height of the root node using Bottom up approach 
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    const depth = 0;
    if (!root) return depth;
    // Depth of the root node is always 1. Therefore Line below would yield same answer
    // return traverse(root, 1)
    const leftDepth = root.left ? traverse(root.left, depth + 1) : depth;
    const rightDepth = root.right ? traverse(root.right, depth + 1) : depth;
    return Math.max(leftDepth, rightDepth) + 1;
 };
 
 var traverse = function(root, depth) {
   let leftDepth = 0;
   let rightDepth = 0;
   if (!root.left && !root.right){
     return depth;  
   }
   if (root.left) {
     leftDepth = traverse(root.left, depth+1)
   }
   if (root.right){
     rightDepth = traverse(root.right, depth+1)
   }
   return Math.max(leftDepth, rightDepth)
 }
