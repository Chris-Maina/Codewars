/**
 * 
 Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

 For example:
 Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

 return its zigzag level order traversal as:

  [
    [3],
    [20,9],
    [15,7]
  ]
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const queue = [];
  const visited = []
  queue.push(root);
  return moveZigZag(queue, visited, 'left');
};

/**
 * @param {TreeNode[]} queue
 * @param {number[]} visited
 * @param {string} dir
 * Implements BFS by switching between queue and stack implementation using dir
 */
function moveZigZag(queue, visited, dir) {
  if (!queue.length) return visited;

  const level = [];
  let len = queue.length;
  while (len > 0) {
    let node = null;
    if (dir === 'left') {
      node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    } else {
      node = queue.pop();
      node.right && queue.unshift(node.right);
      node.left && queue.unshift(node.left);
    }
    level.push(node.val);
    len--;
  }
  level.length && visited.push(level);
  // change direction
  dir = dir === 'left' ? 'right' : 'left';
  return moveZigZag(queue, visited, dir);
}
