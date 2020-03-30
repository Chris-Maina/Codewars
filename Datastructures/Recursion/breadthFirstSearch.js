/*
 Search in a Binary Search Tree

 Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

 For example, 

 Given the tree:
        4
       / \
      2   7
     / \
    1   3

 And the value to search: 2
 You should return this subtree:

      2     
     / \   
    1   3
 In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.

 Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.
 
 */

////////////// SOLUTION ////////////////
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * Recursive solution to search for val by capitalizing on Binary Tree characteristics
 *  - Root has 2 children 
 *  - Left node is always LESS than the root value
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (root && root.val !== val) {
      if (val < root.val) {
        return searchBST(root.left, val);
      } else {
        return searchBST(root.right, val);
      }
    }
    return root;
  };

/*
  Explanation:
   If you think about it, we only need two if statements to implement a recursive approach here.

    - If root is none or root.val is equal to val - we simply return this root value back because we either found the answer or we can't recurse deeper.
    - otherwise, we need to choose if we are going to recurse into the left or right subtree based on the value.
*/
