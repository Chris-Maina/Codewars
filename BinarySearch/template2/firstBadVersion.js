/**
 * First Bad Version
  
   You are a product manager and currently leading a team to develop a new product.
   Unfortunately, the latest version of your product fails the quality check.
   Since each version is developed based on the previous version, all the versions after a bad version are also bad.

   Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

   You are given an API bool isBadVersion(version) which will return whether version is bad.
   Implement a function to find the first bad version. You should minimize the number of calls to the API.

   Example:

   Given n = 5, and version = 4 is the first bad version.

    call isBadVersion(3) -> false
    call isBadVersion(5) -> true
    call isBadVersion(4) -> true

   Then 4 is the first bad version.
 */

/////////////////////// SOLUTION /////////////////////////

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      if (n === 1) return 1;

      if (n === 2) {
        if (isBadVersion(1)) return 1;
        return 2;
      }
      let left = 1;
      let right = n;
      while (left <= right) {
        const middle = Math.floor(left + (right - left)/2);
        /**
         * Inorder to get the first bad version we have to check if the left/previous was not bad.
         * Therefore if mid is BAD, then search first bad version on the left
         * If mid is FALSE, then search right
         */
        if (isBadVersion(middle)) {
          right = middle;
        } else {
          left = middle + 1;
        }
      }
      return left;
    };
};

/////////////////////// RECURSIVE SOLUTION /////////////////////////
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} first bad version
   */
  return function(n) {
    return firstBadVersion(1, n, isBadVersion);
  }
}

/**
 * 
 * @param {integer} low 
 * @param {integer} high 
 * @param {integer} isBadVersion 
 */
function firstBadVersion(low, high, isBadVersion) {
  // base case
  if (low === high) return low;
  const mid = Math.floor(low + (high - low) / 2);

  /**
   * if isBadVersion(mid) is TRUE, means it MAY be the 1st bad version.
   * Go left i.e high = mid
   * if isBadVersion(mid) is FALSE it means we have not go to the bad versions.
   * Go right i.e low = mid + 1
   */
  if (isBadVersion(mid)) {
    return firstBadVersion(low, mid, isBadVersion);
  } else {
    return firstBadVersion(mid + 1, high, isBadVersion);
  }
}