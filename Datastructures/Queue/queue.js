// First in first out(FIFO)
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'
class Queue {
  constructor() {
    this.store = [];
  }

  add(item) {
    this.store.unshift(item);
  }

  peek() {
    const len = this.store.length;
    if (len) return this.store[len-1];
  }

  remove() {
    return this.store.pop();
  }

  size() {
    return this.store.length;
  }

  isEmpty() {
    return (this.store.length === 0);
  }

}

weave = (sourceOne, sourceTwo) => {
  const weaveQueue = new Queue();

  while(sourceOne.peek() || sourceTwo.peek()) {
    if(sourceOne.peek()) {
      weaveQueue.add(sourceOne.remove());
    }
    if(sourceTwo.peek()) {
      weaveQueue.add(sourceTwo.remove());
    } 
  }
  return weaveQueue;
}