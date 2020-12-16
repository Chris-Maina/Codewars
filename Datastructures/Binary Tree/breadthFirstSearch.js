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
    while (queue.length) {
        let store = [];
        let len = queue.length;

        while (len) {
            let current = queue.shift();
            current.left && queue.push(current.left);
            current.right && queue.push(current.right);
            store.push(current.val)
            len--;
        }
        store.length && levels.push(store)
    }
    return levels;
};

// Recursive solution
var levelOrder = function(root) {
    let levels = [];
    if (!root) return levels;

    const queue = [];
    queue.push(root);
    levels = levelOrderTraversal(queue, levels)
    return levels;
};

function levelOrderTraversal(queue, levels) {
    let len = queue.length;
    if (!len) return levels;

    const level = [];
    while (len) {
        const front = queue.shift();
        if (front.left) {
            // populate queue
            queue.push(front.left);
        }
        if (front.right) {
            // populate queue
            queue.push(front.right);
        }
        level.push(front.val);
        len--;
    }
    level.length && levels.push(level);
    return levelOrderTraversal(queue, levels);
}