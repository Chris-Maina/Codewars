/**
 * Postorder traversal uses a stack
 Given a binary tree, return the postorder traversal of its nodes' values.

 Example:

 Input: [1,null,2,3]
   1
    \
     2
    /
   3

 Output: [3,2,1]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Post order: Left Right Root
 * Creates the answer from the end/last element i.e root, backwards.
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    const resultArr = [];
    const stack = [];
    if (!root) return resultArr;
    stack.push(root);
    while (stack.length) {
        let current = stack.pop();
        resultArr.unshift(current.val);
        current.left && stack.push(current.left);
        current.right && stack.push(current.right);
    }

    return resultArr;
};

/**
 * Recursive solution
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return [];
  const arr = [];
  traverseTree(root, arr);
  return arr;
};

/**
 * Visit the Left, Right, Root
 * @param {TreeNode} node
 * @param {number[]} arr
 * @return void
 */
const traverseTree = (node, arr) => {
  if (node.left) {
    traverseTree(node.left, arr);
  }
  if (node.right) {
    traverseTree(node.right, arr);
  }
  arr.push(node.val);
}
