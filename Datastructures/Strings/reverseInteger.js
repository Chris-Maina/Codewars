/*
  Given a 32-bit signed integer, reverse digits of an integer.

  Note:
  Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1].
  For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.



  Example 1:

  Input: x = 123
  Output: 321

  Example 2:

  Input: x = -123
  Output: -321

  Example 3:

  Input: x = 120
  Output: 21

  Example 4:

  Input: x = 0
  Output: 0

  Constraints:

    -231 <= x <= 231 - 1
*/

/////////////////////// SOLUTION ///////////////////////

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const higherLimit = Math.pow(2, 31) - 1;
  const lowerLimit = -Math.pow(2, 31);

  if (x > higherLimit || x < lowerLimit) return 0;

  const sign = Math.sign(x);
  let stringX = Math.abs(x).toString();
  stringX = stringX.split('').reverse().join('');
  const reversedInt = sign * Number(stringX);

  return (reversedInt > higherLimit || reversedInt < lowerLimit) ? 0 : reversedInt;
};
