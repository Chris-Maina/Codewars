// First in last out(FILO)
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1
class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  peek() {
    const len = this.stack.length;
    if (len) return this.stack[len-1];
  }

  pop() {
    return this.stack.pop();
  }
}

export default Stack;
