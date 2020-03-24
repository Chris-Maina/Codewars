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