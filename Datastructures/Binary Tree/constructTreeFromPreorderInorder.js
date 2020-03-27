/**
* Construct Binary Tree from Preorder and Inorder Traversal
 
  Given preorder and inorder traversal of a tree, construct the binary tree.

  Note:
  You may assume that duplicates do not exist in the tree.

  For example, given

   preorder = [3,9,20,15,7]
   inorder = [9,3,15,20,7]
  Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
 */
/////////////////// SOLUTION //////////////////////////////////

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
* @param {number[]} preorder
* @param {number[]} inorder
* @return {TreeNode}
*/
var buildTree = function(preorder, inorder) {
   if (!preorder.length || !inorder.length) return null;
   let root = preorder[0];
   const rootIndex = inorder.indexOf(root);
   root = new TreeNode(root);
   preorder.splice(0, 1);
   root.left = getNode(preorder, inorder.slice(0, rootIndex));
   root.right = getNode(preorder, inorder.slice(rootIndex+1));
   return root;
};

/**
* @param {number[]} preorder
* @param {number[]} inorder
* @return {TreeNode}
*/
var getNode = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  let position = 0;
  let root = preorder[position];
  let rootIndex = inorder.indexOf(root);
  while (rootIndex === -1) {
      position++;
      root = preorder[position];
      rootIndex = inorder.indexOf(root);
   }
  root = new TreeNode(root);
  // remove visited root in order to reduce the while loop above
  preorder.splice(position, 1);
 
  root.left = getNode(preorder, inorder.slice(0, rootIndex));
  root.right = getNode(preorder, inorder.slice(rootIndex+1));
  return root;
};
