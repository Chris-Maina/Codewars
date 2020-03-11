/**
 *
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 */

 /**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  return memoizedClimbingStairs(n) 
};

var memoizedClimbStairs = function(n, cache = {}) {
  if (cache[n]) return cache[n];
  if (n === 1) return 1;
  if (n === 2) return 2;
  let result = memoizedClimbStairs(n-1, cache) + memoizedClimbStairs(n-2, cache);
  cache[n] = result;
  return result;
}