/*
 *
  Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

  Range Sum Query 2D
  The above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.

  Example:
  Given matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
  ]

  sumRegion(2, 1, 4, 3) -> 8
  sumRegion(1, 1, 2, 2) -> 11
  sumRegion(1, 2, 2, 4) -> 12
 */


class NumMatrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  sumRegion(row1, col1, row2, col2) {
    if (!this.matrix.length) return 0;
    let sum = 0;

    for (let row = row1; row < row2+1; row++) {
      for(let col = col1; col < col2+1; col++) {
        sum += this.matrix[row][col];
      }
    } 
    return sum;
  }
}
const matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
  ]
const obj = new NumMatrix(matrix)

obj.sumRegion(2, 1, 4, 3);