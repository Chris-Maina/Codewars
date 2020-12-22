/**
 * 
  Given the root of a binary tree, determine if it is a valid binary search tree (BST).

  A valid BST is defined as follows:

    - The left subtree of a node contains only nodes with keys less than the node's key.
    - The right subtree of a node contains only nodes with keys greater than the node's key.
    - Both the left and right subtrees must also be binary search trees.

  Example 1:

     2
    / \
   1   3

  Input: root = [2,1,3]
  Output: true

  Example 2:

     5
    / \
   1   4
      /  \
     3    6

  Input: root = [5,1,4,null,null,3,6]
  Output: false
  Explanation: The root node's value is 5 but its right child's value is 4.
 */

 /////////////////////// SOLUTION ///////////////////////

/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  // Empty tree is a valid BST
  if (!root) return true;
  const stack = [];
  let prev = null;
  let node = root;
  while (stack.length || node) {
    // Go to the left most node
    if (node) {
      stack.push(node);
      node = node.left
    } else {
      const popped = stack.pop();
      /*
      * A valid BST will have numbers in ascending order (Inorder traversal)
      * e.g. 1, 2, 3, 4, 5, 6
      * if a number is less than the previous number then it is not valid. Node 4 with previous node 6 in
      * 1, 2, 6, 4, 8
      */
      if (prev !== null && popped.val <= prev) return false;
      prev = popped.val
      node = popped.right;
    }
  }
  return true;
}

//// Recursive solution ///
var isValidBST = function(root) {
  return validateBST(root, null, null);
}

/**
 * Nodes on the left have a lower limit of null but higher limit of root node value e.g null and 5 in Example 2
 * Nodes on the right have a lower limit of root node value i.e 5, and a higher limit of null.
 * Any node in the left should be less than the higher limit. The reverse is false i.e root.val >= high
 * Any node in the right subtree should higher than the lower bound. The reverse is false i.e root.val <= low
 * @param {TreeNde} root 
 * @param {number | null} low - lower bound of root node 
 * @param {number | null} high - higher bound of root node
 */
function validateBST(root, low, high) {
  if (!root) return true;

  // The current node's value must be between low and high.
  if ((high !==  null && root.val >= high) || (low !== null  && root.val <= low)) return false;

  return validateBST(root.left, low, root.val) && validateBST(root.right, root.val, high)
}
