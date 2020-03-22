/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const levels = [];
    const queue = [];
    if (!root) return levels;
    queue.push(root);
    levels.push([root.val]);
    while (queue.length) {
        let left;
        let right;
        let store = [];
        let len = queue.length;

        for (let i = 0; i < len; i++) {
            let current = queue.shift();
            if (current && current.left) {
                left = current.left;
                store.push(left.val)
                queue.push(left);
            }
            if (current && current.right) {
                right = current.right;
                store.push(right.val)
                queue.push(right);
            }
        }
        store.length && levels.push(store)
    }
    return levels;
};