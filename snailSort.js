function snail(arr) {
  const snailArr = [];
  let rowMin = 0;
  let colMin = 0;
  let rowMax = arr.length - 1;
  let colMax = arr.length - 1;
  let done = false;
  let direction = "right";
  while (!done) {
    switch (direction) {
      case "right":
        for (let col = colMin; col <= colMax; col++) {
          arr[rowMin][col] && snailArr.push(arr[rowMin][col]);
        }
        direction = "down";
        rowMin++;
        break;
      case "down":
        for (let row = rowMin; row <= rowMax; row++) {
          arr[row][colMax] && snailArr.push(arr[row][colMax]);
        }
        direction = "left";
        colMax--;
        break;
      case "left":
        for (let col = colMax; col >= colMin; col--) {
          arr[rowMax][col] && snailArr.push(arr[rowMax][col]);
        }
        direction = "up";
        rowMax--;
        break;
      case "up":
        for (let row = rowMax; row >= rowMin; row--) {
          arr[row][colMin] && snailArr.push(arr[row][colMin]);
        }
        direction = "right";
        colMin++;
        break;
    }
    if (rowMin > rowMax || colMin > colMax) done = true;
  }
  return snailArr;
}


array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// Test.assertDeepEquals(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
// Test.assertDeepEquals(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);

snail(array);

// Solution 2

function snail(array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}
