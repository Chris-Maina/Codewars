/**
 * 
 Evaluate the value of an arithmetic expression in Reverse Polish Notation.

  Valid operators are +, -, *, /. Each operand may be an integer or another expression.

  Note:

  Division between two integers should truncate toward zero.
  The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.
  Example 1:

  Input: ["2", "1", "+", "3", "*"]
  Output: 9
  Explanation: ((2 + 1) * 3) = 9
  Example 2:

  Input: ["4", "13", "5", "/", "+"]
  Output: 6
  Explanation: (4 + (13 / 5)) = 6
  Example 3:

  Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
  Output: 22
  Explanation: 
    ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
  = ((10 * (6 / (12 * -11))) + 17) + 5
  = ((10 * (6 / -132)) + 17) + 5
  = ((10 * 0) + 17) + 5
  = (0 + 17) + 5
  = 17 + 5
  = 22
 */

 /**
  * 
  * @param {number} op1 
  * @param {number} op2 
  * @param {string} operator 
  */
const evaluateExp = (op1, op2, operator) => {
  if (operator === '-') return parseInt(op1, 10) - parseInt(op2, 10);
  if (operator === '+') return parseInt(op1, 10) + parseInt(op2, 10);
  if (operator === '*') return parseInt(op1, 10) * parseInt(op2, 10);
  if (operator === '/') return parseInt(op1, 10) / parseInt(op2, 10);
}

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const validOperations = ['+', '-', '*', '/'];
    const stack = [];
    let firstOperand;
    let secondOperand;
    let result;
    tokens.forEach((el, index) => {
        if (validOperations.some(operator => operator === el)) {
            firstOperand = stack.pop();
            secondOperand = stack.pop();
            result = evaluateExp(secondOperand, firstOperand, el);
            stack.push(Math.trunc(result))
        } else {
            stack.push(el);
        }
    });
    return stack.length && stack.pop();
};