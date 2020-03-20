/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

  1. Open brackets must be closed by the same type of brackets.
  2. Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.
*/
import Stack from './stack';

isValid = function(s) {
  if(!s.length) return true;
  const stack = new Stack();
  const expression = s.split('');
  bracket_map = {")": "(", "]": "[",  "}": "{"};

  expression.map(item => {
      if(item === "(" || item ==="[" || item === "{") {
        stack.push(item);
      } else if(stack.peek() === bracket_map[item]) {
          stack.pop();
      } else {
        stack.push(item);
      }
  });
  
  if (stack.size()) return false;
  return true;

};