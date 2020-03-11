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