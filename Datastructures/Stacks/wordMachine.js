/**
  A word machine is a system that performs a sequence of simple operations on a stack of integers.
  Initially the stack is empty. The sequence of operations is given as a string. 
  Operations are separated by single spaces. The following operations may be specified:
  - an integer X (from 0 - 2^20 - 1): the machine pushes X onto the stack
  - "POP": the machine removes the top most number from the stack
  - "DUP": the machine pushes a duplicate of the topmost number onto the stack
  - "+": the machine pops the two topmost elements from the stack, adds them and pushes the sum onto the stack
  - "-": the machine pops the two topmost elements from the stack, subtracts the second one from the first one and
    pushes the difference onto the stack
  
  After processing all the operations, the machine returns the topmost value from the stack.
  The machine processes 20-bit unsigned integers (numbers from 0 to 2^20 - 1). An overflow in addition or underflow 
  in subtraction causes an error. 
  The machine also reports an error when it tries to perform an operation that expects more numbers on the stack than
  the stack actually contains. Also, if, after performing all the operations, the stack is empty, the machine reports an
  error.
 */

/**
 * @param {string[]} S
 */

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (S.length < 1 || S.length > 2000) return -1;

  const sArray = S.split(' ');
  const stack = [];
  const upperLimit = Math.pow(2, 20) - 1;
  const lowerLimit = 0;

  for (let index = 0; index < sArray.length; index++) {
    if (sArray[index] === "POP") {
      stack.pop();
    } else if (sArray[index] === "DUP") {
      stack.push(sArray[sArray.length - 1]);
    } else if (sArray[index] === "+" || sArray[index] === "-") {
      if (sArray.length < 2) return -1;
      const firstOperand = sArray.pop();
      const secondOperand = sArray.pop();
      const result = evaluateExp(firstOperand, secondOperand, sArray[index]);

      if (result < lowerLimit || result > upperLimit) return -1; 
      stack.push(result)
    } else if (isNaN(sArray[index])) {
      continue
    } else {
      const current = parseInt(sArray[index], 10);
      if (current < lowerLimit || current > upperLimit) return -1; 
      stack.push(current);
    }
  }
  return stack[stack.length - 1];
}

const evaluateExp = (op1, op2, operator) => {
  if (operator === '-') return parseInt(op1, 10) - parseInt(op2, 10);
  if (operator === '+') return parseInt(op1, 10) + parseInt(op2, 10);
}

console.log('4 5 6 - 7 +')