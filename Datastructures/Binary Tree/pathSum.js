/*
 Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

 Note: A leaf is a node with no children.

 Example:

 Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
 return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
*/

// The problem below describes a Depth First Search problem.

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return false; 
    const pathSum = traverse(root, 0, sum)
    return pathSum === sum; 
};

/**
 * Searches for a path where sum of nodes to the leaf nodes is equal to sum provided
 * @param {Node} root 
 * @param {Number} count 
 * @param {Number} sum
 * @return {Number} 
 */
var traverse = function(root, count, sum) {
  let pathCount = 0;
  if (!root.left && !root.right) {
     count += root.val;
     return count; 
  }
  // Traverse left until you get to the left leaf nodes
  if (root.left) {
     pathCount = traverse(root.left, count+root.val, sum) 
  }
  // Before going right node determine if sum is found.
  if (pathCount === sum) return pathCount; 
  if (root.right) {
    pathCount = traverse(root.right, count+root.val, sum) 
  }
  return pathCount;
}
