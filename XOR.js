/**
 * Given a string consisting entirely of binary digits (0 , 1) seperated using spaces. 
 * Find the XOR of all digits and return the answer.
 *
 * @param {string} 
 * @returns {number}
 */
X = input => {

  /**
   * Create an array from string input
   * Use the callback function in reduce on every element
   */
  let re = /\s/;
  return input.split(re).reduce((a, b)=>( a == b ? 0: 1));
};
