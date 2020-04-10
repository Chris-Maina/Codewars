/**
 * Sqrt(x)

    Implement int sqrt(int x).

    Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

    Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

    Example 1:

    Input: 4
    Output: 2
    Example 2:

    Input: 8
    Output: 2
    Explanation: The square root of 8 is 2.82842..., and since 
                the decimal part is truncated, 2 is returned.
 */

 /////////////////////////// SOLUTION ////////////////////////////////

 
/**
 * Returns the square root of x
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0) return 0;
  if (x < 4) return 1;
  return search(x, left = 0, right = x); 
};

/**
 * Finds a number, mid, which when squared equals to x
 * @param {number} x 
 * @param {number} left 
 * @param {number} right 
 */
var search = function (x, left, right) {
  const mid = Math.floor(left + (right - left)/2);
 
  if (left > right) return mid;
  
  const square = Math.pow(mid, 2);
  if (square < x) {
    // search right if square is small
    return search(x, mid + 1, right);
  } else if (square > x) {
    // search left if square is big
    return search(x, left, mid - 1);
  } else {
    return mid; 
  }
}
