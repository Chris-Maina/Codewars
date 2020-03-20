/**
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

    push(x) -- Push element x onto stack.
    pop() -- Removes the element on top of the stack.
    top() -- Get the top element.
    getMin() -- Retrieve the minimum element in the stack.
 */

class MinStack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item)
  }

  top() {
    const len = this.stack.length
    return this.stack[len-1];
  }

  pop() {
    this.stack.pop();
  }

  getMin() {
    return Math.min(...this.stack);
  }
}
