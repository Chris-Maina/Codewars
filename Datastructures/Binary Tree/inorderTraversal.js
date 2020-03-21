/**
 * 
 Given a binary tree, return the inorder traversal of its nodes' values.

 Example:

  Input: [1,null,2,3]
    1
      \
      2
      /
    3
 
 Output: [1,3,2]
 Input: [1,4,3,2,3,1]
 Output: [2,4,3,1,1,3]
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
var inorderTraversal = function(root) {
    const resultArr = [];
    const stack = [];
    stack.push(root);
    let current = root;
    
    while(stack.length) {
      // Go to the left most node until current is NULL.
      // Start to pop() when current is NULL.
      // If the popped item has a right node, add it to the stack
      if (current) {
        current.left !== null && stack.push(current.left);
        current = current.left;
      } else {
          current = stack.pop();
          resultArr.push(current.val);
          if (current && current.right) {
              stack.push(current.right) 
          }
          current = current.right;
      }
    }
    return resultArr;
};
