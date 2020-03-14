/**
 *  Given an array, the algorithm to find the maximum subarray sum is called Kadane's Algorithm.
 * 
 * Example given 
   const matrix = [
      [6, -5, -7, 4, -4],
      [-9, 3, -6, 5, 2],
      [-10, 4, 7, -6, 3],
      [-8, 9, -3, 3, -7]
   ];

   answer = [
      [ 4, 7 ],
      [ 9, -3 ]
    ]
 */


class Kadane {
  constructor(maxSum=0, startIndex=0, endIndex=0) {
   this.maxSum = maxSum;
   this.startIndex = startIndex;
   this.endIndex = endIndex;
  }

  kadaneAlgorithm (arr) {
   let maxEndingAtIndex=0
   for (let i = 0; i < arr.length; i++) {
     maxEndingAtIndex += arr[i];
     if (maxEndingAtIndex < 0) {
       maxEndingAtIndex = 0;
       this.startIndex = i + 1;
     }

     if (maxEndingAtIndex > this.maxSum) {
       this.maxSum = maxEndingAtIndex;
       this.endIndex = i;
     }
   }
  }
}

class Rectangle {
  constructor (sum=0, left, right, top, bottom) {
   this.sum = sum;
   this.top = top;
   this.left = left;
   this.right = right;
   this.bottom = bottom;
  }
}

class Solution {
 
 constructor(matrix) {
   this.matrix = matrix;
   this.store = []; // array to store sum of values from matrix
 }

 getSumOfMatrixCols(right, store, matrix) {
   for(let i = 0; i< matrix.length; i++) {
     store[i] += matrix[i][right]
   }
   return store;
 }

 getSubArr(left, right, top, bottom, matrix) {
   return matrix.slice(top, bottom+1).map(el => el.slice(left, right+1))
 }

 getMaximumSumOfRectangle() {
   const rows = this.matrix.length;
   const cols = this.matrix[0].length;
   let left;
   let right;
   let currentSum = 0;
   let maxSum = 0;
   let maxLeft = 0;
   let maxRight = 0;
   let maxTop = 0;
   let maxBottom = 0;

   // left plantings
   for (left = 0; left < cols; left++) {
     // For each left iteration, update store to have values 0
     for (let i = 0; i<rows; i++) {
       this.store[i] = 0;
     }

     // for each left get the right plantings
     for (right = left; right < cols; right++) {

       // populate store with updated sum values
       this.store = this.getSumOfMatrixCols(right, this.store, this.matrix);
       // get maximum sum of contigous values in store array
       let kadaneInstance  = new Kadane();
       kadaneInstance.kadaneAlgorithm(this.store);
       currentSum = kadaneInstance.maxSum;
       if (currentSum > maxSum) {
         maxSum = currentSum;
         maxLeft = left;
         maxRight = right;
         maxTop = kadaneInstance.startIndex;
         maxBottom = kadaneInstance.endIndex;
       }

     }
   }

   return this.getSubArr(maxLeft, maxRight, maxTop, maxBottom,this.matrix);
 }

}

const matrix = [
 [6, -5, -7, 4, -4],
 [-9, 3, -6, 5, 2],
 [-10, 4, 7, -6, 3],
 [-8, 9, -3, 3, -7]
];
const solution = new Solution(matrix);
console.log(solution.getMaximumSumOfRectangle())
