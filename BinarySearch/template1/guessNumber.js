/**
 * 
 * Guess Number Higher or Lower
 
    We are playing the Guess Game. The game is as follows:

    I pick a number from 1 to n. You have to guess which number I picked.

    Every time you guess wrong, I'll tell you whether the number is higher or lower.

    You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):

    -1 : My number is lower
    1 : My number is higher
    0 : Congrats! You got it!
    Example :

    Input: n = 10, pick = 6
    Output: 6
 */

 ////////////////////////// SOLUTION ///////////////////////////////
/* Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  if (n === 1) return 1;
  return getNumber(n, left=1, right=n);
};


var getNumber = function(n, left, right) {
  const myGuess = left + (right - left)/2;
  
  // call guess API
  const guessRes = guess(myGuess);
  
  if (left > right) return myGuess;
  
  // correct guess
  if (guessRes === 0) return myGuess;
   
  if (guessRes === -1) {
      // guess is lower, go right
      return getNumber(n, left, right = myGuess);
    } else if (guessRes === 1) {
      // guess is higher, go left
      return getNumber(n, left = myGuess, right);
    }
}
