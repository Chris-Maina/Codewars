/**
 * Bob is preparing to pass IQ test. 
 * The most frequent task in this test is to find out which one of the given numbers differs from the others.
 * Bob observed that one number usually differs from the others in evenness. 
 * Help Bob — to 
 * check his answers, he needs a program that among the given numbers finds one that is different in evenness, and 
 * return a position of this number.
 * 
 * @param {string} numbers
 * @returns {int} index  of number
 */

function iqTest(numbers){
  /**
   * Create an array from the string. Use a regular expession to remove whitespaces
   * Use filter to create arrays for odd and even numbers
   * Check the length.
   * Use it to get the index of the value in the original array
   */
   const re = /\s/;
   const original = numbers.split(re);
   const evenNums= original.filter((num)=>(num % 2 === 0));
   const oddNums= original.filter((num)=>(num % 2 !== 0));
   return evenNums.length < oddNums.length ? original.indexOf(evenNums[0])+1 : original.indexOf(oddNums[0])+1;
 }
