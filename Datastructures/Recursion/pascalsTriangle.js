/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const triangle = [];
  if (numRows === 0) return triangle;
  if (numRows === 1) {
      triangle.push([1]);
      return triangle;
  }
  if (numRows === 2) {
      triangle.push([1]);
      triangle.push([1, 1]);
      return triangle;
  }
  triangle.push([1]);
  triangle.push([1, 1]);
  for(let i = 2; i < numRows; i++) {
     addRow(triangle)  
  }

  return triangle;
};

var addRow = function(triangle) {
  let previous = triangle[triangle.length - 1];
  let newRow = [1];
  for (i=0; i < previous.length - 1; i++) {
      let curr = previous[i];
      let next = previous[i + 1];
      newRow.push(curr + next);
  }
  newRow.push(1);
  triangle.push(newRow);
}