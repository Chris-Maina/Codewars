/**
 * Minimum Depth of Binary Tree
 
  Given a binary tree, find its minimum depth.

  The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

  Note: A leaf is a node with no children.



  Example 1:
       3
      / \
     9   20
        /  \
       15   7

  Input: root = [3,9,20,null,null,15,7]
  Output: 2

  Example 2:

  Input: root = [2,null,3,null,4,null,5,null,6]
  Output: 5

 */
var minDepth = function (root) {
  if (root === null) return 0;
  return getDepth(root, 1);
};

/**
 * @description Returns the depth of the node passed
 * @param {TreeNode} node
 * @param {number} depth
 * @returns {number} minimum depth.
 */
function getDepth(node, depth) {
  if (node.left === null && node.right === null) return depth;
  let leftSideDepth = 0;
  let rightSideDepth = 0;
  if (node.left !== null) {
    leftSideDepth = getDepth(node.left, depth + 1)
  }
  if (node.right !== null) {
    rightSideDepth = getDepth(node.right, depth + 1)
  }
  // Handles trees with a single child i.e. left/right
  if (leftSideDepth === 0) {
    return rightSideDepth;
  } else if (rightSideDepth === 0) {
    return leftSideDepth;
  }

  return Math.min(leftSideDepth, rightSideDepth)
}
