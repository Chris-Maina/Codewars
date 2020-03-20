
/**
 * Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Example:

MyStack stack = new MyStack();

stack.push(1);
stack.push(2);  
stack.top();   // returns 2
stack.pop();   // returns 2
stack.empty(); // returns false
Notes:

You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).
 */
/**
 * Initialize your data structure here.
 */
class Queue {
  constructor() {
    this.queue = [];
  }
  
  push(x) {
     return this.queue.push(x);
  }
  
  pop() {
     return this.queue.shift(); 
  }
  size() {
      return this.queue.length;
  }
  peek() {
      if (this.queue.length === 0) return;
      return this.queue[0];
  }
  getItemAt(position) {
    return this.queue[position];
  }
}
class MyStack {
constructor() {
  this.stack = new Queue();
  this.store = [];
}

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
push(x) {
  if(!x) return;
  this.stack.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
pop() {
  while(this.stack.size()) {
      this.store.push(this.stack.pop())
  }
  const poppedItem = this.store.pop();
  while(this.store.length) {
    this.stack.push(this.store.shift())
  }
  return poppedItem;
};

/**
 * Get the top element.
 * @return {number}
 */
top() {
  return this.stack.getItemAt(this.stack.size() -1);
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
empty() {
    return this.stack.size() === 0;
};

}

/** 
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/