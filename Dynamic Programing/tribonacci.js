/**
 * N-th Tribonacci Number
  The Tribonacci sequence Tn is defined as follows:

  T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

  Given n, return the value of Tn.



  Example 1:

  Input: n = 4
  Output: 4
  Explanation:
  T_3 = 0 + 1 + 1 = 2
  T_4 = 1 + 1 + 2 = 4

  Example 2:

  Input: n = 25
  Output: 1389537
 */

 /////////////////////// SOLUTION ///////////////////////

/**
* @param {number} n
* @return {number}
*/
var tribonacci = function (n) {
  // Tn+3  = Tn + Tn+1 + Tn+2
  // t(3) = t(0) + t(1) + t(2) for n = 0
  // t(4) = t(1) + t(2) + t(3) for n = 1
  // t(7) = t(4) + t(5) + t(6) for n = 4
  return memoizedTribonacci(n, {});
};

const memoizedTribonacci = (n, cache) => {
  if (cache[n]) return cache[n];
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  cache[n] = memoizedTribonacci(n - 3, cache) + memoizedTribonacci(n - 2, cache) + memoizedTribonacci(n - 1, cache);
  return cache[n];
}
