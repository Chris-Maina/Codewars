/**
  Given a range, num, find the sum of its range

    Example
    sumOfRange(3) ==> 3+2+1 = 6
 */

/**
 * 
 * @param {Int} num 
 * @param {Int} total 
 * return the sum of the numbers in the range provided i.e. num
 */
const sumOfRange = (num, total = 0) => {

  if (num <= 0) return total;
  return sumOfRange(num - 1, total += num);
};
