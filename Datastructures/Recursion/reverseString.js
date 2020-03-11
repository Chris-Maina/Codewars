/**
 Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

 

  Example 1:

  Input: ["h","e","l","l","o"]
  Output: ["o","l","l","e","h"]
  Example 2:

  Input: ["H","a","n","n","a","h"]
  Output: ["h","a","n","n","a","H"]
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  return helper(0, s)
};

var helper = function(index, s) {
  let poppedItem;
  if (index === s.length) return s;
  poppedItem = s.pop();
  s.splice(index,0, poppedItem);
  return helper(index + 1, s)
}

console.log(reverseString(["h","e","l","l","o"]))