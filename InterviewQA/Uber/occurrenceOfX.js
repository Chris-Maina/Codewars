/**
 * Given a sorted array arr[] and a number x, write a function that counts the occurrences of x in arr[]. 
 * (O(Log(N)))
 */

 const getOccurrenceOfX = (arr, x) => {
   if (!arr || (arr && !arr.length) || !x) return -1;
   return arr.reduce((acc, next) => {
     if (parseInt(next, 10) === parseInt(x, 10)) {
      acc = acc + 1;
     }
     return acc; 
   }, 0);
 }

 console.log(getOccurrenceOfX([1, 2, 3, 2, 4, 5], 9))