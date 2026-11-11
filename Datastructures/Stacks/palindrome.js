// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
const palindrome = word => {
  let i = 0;
  let rword = '';
  const letters = [];
  while(i<word.length) {
    letters.push(word[i]);
    i++;
  }
  // OR const letters = word.split('');
  let j = 0;
  while(j < word.length) {
    rword += letters.pop();
    j++
  }

  return rword === word
} 

/**
 * This solution relies on the premise that strings are a collection/array
 * of character i.e a stack
 * @param {string} word 
 */
const palindrome = word => {
  let rword = '';

  for (let i = word.length - 1; i >= 0; i--) {
    rword += word[i]
  }
  return rword === word;
}
