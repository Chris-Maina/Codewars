/*
  Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

  Examples:

  s = "leetcode"
  return 0.

  s = "loveleetcode"
  return 2.



  Note: You may assume the string contains only lowercase English letters.
*/

/////////////////////// SOLUTION ///////////////////////

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  if (!s) return -1;
  const stringMap = {};
  for (let index = 0; index < s.length; index++) {
    let curr = s.charAt(index);
    if (stringMap[curr]) {
      stringMap[curr]++;
    } else {
      stringMap[curr] = 1;
    }
  }
  for (let index = 0; index < s.length; index++) {
    if (stringMap[s.charAt(index)] === 1) return index;
  }
  return -1;
};
