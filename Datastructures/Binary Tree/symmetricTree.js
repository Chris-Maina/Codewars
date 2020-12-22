/**
 Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

 For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3



 But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3



 Follow up: Solve it both recursively and iteratively.
*/

/////////////////////// RECURSIVE SOLUTION ///////////////////////
/**
 * Time complexity : O(n). Because we traverse the entire input tree once,
 * the total run time is O(n), where n is the total number of nodes in the tree.
 */
function isSymmetric(root) {
  if (!root) return true;
  /**
   * A tree is symmetric if the left subtree is a mirror reflection of the right subtree.
   * Two trees are a mirror reflection of each other if:
   *   - Their two roots have the same value.
   *   - The right subtree of each tree is a mirror reflection of the left subtree of the other tree.
   */
  return isMirror(root.left, root.right);
}

function isMirror(leftTree, rightTree) {
  if (!leftTree && !rightTree) return true;
  if (!leftTree || !rightTree) return false;
  return (leftTree.val === rightTree.val) 
  && isMirror(leftTree.left, rightTree.right)
  && isMirror(leftTree.right, rightTree.left)
}

// OR 
/**
 * Mirror of a Binary Tree T is another Binary Tree M(T) with left and right children of all non-leaf nodes interchanged.
 * With this in mind swap the left subtree child nodes and check if it is equal to the right
 */
var isSymmetric = function (root) {
  if (!root || (!root.left && !root.right)) return true;
  root.left = swapChildNodes(root.left);
  return JSON.stringify(root.left) === JSON.stringify(root.right);
};

function swapChildNodes(node) {
  if (!node) return;
  let temp = node.left;
  node.left = node.right;
  node.right = temp;
  swapChildNodes(node.left);
  swapChildNodes(node.right);

  return node;
} 

/////////////////////// ITERATIVE SOLUTION ///////////////////////
/**
 * Time complexity : O(n). Because we traverse the entire input tree once, the total run time is O(n), where n is the total number of nodes in the tree.
 * @param {TreeNode} root 
 */
function isSymmetric(root) {
  if (!root) return true;
  if (!root.left && !root.right) return true;
  if (!root.left || !root.right) return false;

  const queue = [];
  queue.push(root.left);
  queue.push(root.right);

  while (queue.length) {
    const rightTree = queue.pop();
    const leftTree = queue.pop();

    if (!rightTree && !leftTree) continue;
    if (!rightTree || !leftTree) return false;
    if (rightTree.val !== leftTree.val) return false;

    queue.push(leftTree.right);
    queue.push(rightTree.left);
    queue.push(leftTree.left);
    queue.push(rightTree.right);
  }
  return true
}