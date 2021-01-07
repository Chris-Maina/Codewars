/**
 *  Path Sum II
 * 
  Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

  Note: A leaf is a node with no children.

  Example:

  Given the below binary tree and sum = 22,

        5
      / \
      4   8
    /   / \
    11  13  4
  /  \    / \
  7    2  5   1

  Return:

  [
    [5,4,11,2],
    [5,8,4,5]
  ]
 */


/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/

/////////////////////// SOLUTION ///////////////////////

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  if (root === null) return [];

  return getPathsWithSum(root, sum, root.val, [root.val], []);
};

function getPathsWithSum(node, sum, pathSum, path, result) {
  if (node.left === null && node.right === null && pathSum === sum) {
    result.push(path);
    return result;
  }

  /**
   * Pass pathSum and path parameters by value. 
   * Create a new copy of path object/array to facilitate this.
   * Since you want to view modified version of result/have same values when mutated somewhere, pass by reference
   * 
   * If you performed mutative actions like push then passing it as a parameter (pass by reference)i.e.
   * path.push(node.left.val)
   * getPathsWithSum(..., path, result)
   * It would have the same values on the next invocation of getPathsWithSum line 73
   * 
   * https://medium.com/@mayuminishimoto/javascript-pass-by-value-and-pass-by-reference-f9b80d2221b8
   */
  if (node.left) {
    getPathsWithSum(node.left, sum, pathSum + node.left.val, [...path, node.left.val], result);
  }

  if (node.right) {
    getPathsWithSum(node.right, sum, pathSum + node.right.val, [...path, node.right.val], result);
  }

  return result;
}
