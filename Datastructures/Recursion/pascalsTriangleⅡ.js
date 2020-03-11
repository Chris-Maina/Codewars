/**
 * 
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 3
Output: [1,3,3,1]
Follow up:

Could you optimize your algorithm to use only O(k) extra space?
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let triangle = [];
  if (rowIndex === 0) {
      triangle.push([1]);
  } else if (rowIndex >= 1) {
      triangle.push([1], [1, 1]);
  }
  triangle = addRow(rowIndex, triangle);
  
  return triangle[rowIndex];
};

/**
 * Builds a Pascal's tree by adding rows. Solution is memoized
 * @param {number} numberOfRows 
 * @param {array} triangle 
 * 
 */
var addRow = function(numberOfRows, triangle) {
  let cache = {};
  while(numberOfRows >= 2) {
      let nextRow = [1];
      let previousRow = triangle[triangle.length - 1];
      for(let i=0; i < previousRow.length -1; i++) {
        let sum
        let curr= previousRow[i];  
        let next= previousRow[i+1]; 
        if (cache[`${curr} + ${next}`]) {
            sum = cache[`${curr} + ${next}`]
        } else {
            sum = curr + next;
            cache[`${curr} + ${next}`] = sum;
        }
        
        nextRow.push(sum);
      }
      nextRow.push(1);
      triangle.push(nextRow); 
      numberOfRows--;
  }
  return triangle;
}