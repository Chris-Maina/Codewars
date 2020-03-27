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
  if (!s.length) return null;
  return helper(0, s, s.length-1);
};

var helper = function(index, s, end) {
  if (index > end) return s;
  let temp = s[index];
  s[index] = s[end];
  s[end]=temp;
  return helper(index + 1, s, end - 1)
}

console.log(reverseString(["h","e","l","l","o"]))