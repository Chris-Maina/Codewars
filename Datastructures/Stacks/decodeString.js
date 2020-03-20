/**
 * 
  Given an encoded string, return its decoded string.

  The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

  You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

  Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

  Examples:

  s = "3[a]2[bc]", return "aaabcbc".
  s = "3[a2[c]]", return "accaccacc".
  s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
*/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const encodedArr = s.split('');
  const stack = [];
  const numberStack = [];
  let str= '';
  let result = '';
  let digit = '';
  encodedArr.forEach((val, index) => {
      if (!isNaN(val)) {
          digit = digit * 10 + parseInt(val);
      } else if (val === '[') {
        stack.push(val);
        numberStack.push(digit.toString());
        digit = '';
      } else if (val === ']') {
          let multiplier = numberStack.pop();
          while(stack[stack.length - 1] !== '[') {
            str = stack.pop() + str;
          }
          str = str.repeat(multiplier);
          stack.pop();
          if (!stack.length && !numberStack.length) {
            result += str;
            str = ''
          }
      } else {
          stack.push(val);
      }
  });
  while(stack.length) {
    result += stack.shift();
  }
  return result;
};