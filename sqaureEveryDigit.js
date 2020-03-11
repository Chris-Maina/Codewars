/**
 * You are asked to square every digit of a number.
 * For example, if we run 9119 through the function, 811181 will come out, because 9 SQUARED is 81 and 1 SQUARED is 1.
 * 
 * @param {number} num
 * @returns {number}
 */
function squareDigits(num){

  /**
   * Convert num to string i.e (''+num) or String(num) or num.toString
   * Create an array i.e using split('')
   * Get sqaures of array values i.e use map()
   * Convert array of squares to string then a number i.e array.join('') and then Number(string)
   */
  let arraySquaredNums =(''+ num).split('').map((singleNum)=> (singleNum * singleNum));
  return Number(arraySquaredNums.join(''));
}
