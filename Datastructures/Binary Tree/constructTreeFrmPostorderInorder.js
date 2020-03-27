/**
 * 
 *  Construct Binary Tree from Inorder and Postorder Traversal

    Given inorder and postorder traversal of a tree, construct the binary tree.

    Note:
    You may assume that duplicates do not exist in the tree.

    For example, given

    inorder = [9,3,15,20,7]
    postorder = [9,15,7,20,3]
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
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
* @param {number[]} inorder
* @param {number[]} postorder
* @return {TreeNode}
*/
var buildTree = function(inorder, postorder) {
   if (!inorder.length || !postorder.length) return null;
   let root = postorder[postorder.length - 1];
   let rootIndex = inorder.indexOf(root);
   root = new TreeNode(root);
   postorder.splice(postorder.length - 1, 1);
   root.left =  getNode(inorder.slice(0, rootIndex), postorder);
   root.right = getNode(inorder.slice(rootIndex+1), postorder);
   return root;
};

/**
* @param {number[]} inorder
* @param {number[]} postorder
* @return {TreeNode}
*/
var getNode = function(inorder, postorder) {
 if (!inorder.length || !postorder.length) {
     return null;
 }
 let rootPostn = postorder.length;
 let root = postorder[rootPostn - 1];
 let rootIndex = inorder.indexOf(root);
 // if you cannot find the root/number in inorder array
 // look for the first appearance of any number in inorder from the left of postorder
 while(rootIndex === -1) {
   rootPostn--;
   root = postorder[rootPostn - 1];
   rootIndex = inorder.indexOf(root);   
 }
 root = new TreeNode(root);

 // remove root visited to reduce iterations of the while loop above
 postorder.splice(rootPostn - 1, 1);
 
 root.left =  getNode(inorder.slice(0, rootIndex), postorder);
 root.right = getNode(inorder.slice(rootIndex+1), postorder);

 return root;
}
