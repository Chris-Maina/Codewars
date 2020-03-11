// --- Directions
// Given a binary tree,
// return the inorder traversal of its nodes
// input = [1, null, 2, 3]
// output = [1, 3, 2]
/**
 * function TreeNode(val) {
 *  this.val = val;
 *  this.left = this.right = null
 * }
 */

class TreeNode {
  constructor(val) {
      this.val = val;
      this.left = this.right = null;
  }

  add(item) {
    if (item < this.val && this.left)  {
        this.left.add(item);
    } else if (item < this.val) {
        this.left = new TreeNode(item);
    }
    if (item > this.val && this.right)  {
        this.right.add(item);
    } else if (item > this.val) {
        this.right = new TreeNode(item);
    }
  }
}

traverse = (root, output) => {
 if (root === null) return;
  if (root.left !== null) {
    traverse(root.left, output)
  }
  root.val && output.push(root.val)
  if (root.right !== null) {
    traverse(root.right, output)
  } 
}

const inorderTraversal = root => {
const output = [];
traverse(root, output)
return output;
};

const tree = new TreeNode(1)
tree.add(null)
tree.add(2);
tree.add(3);
console.log('tree', inorderTraversal(tree))