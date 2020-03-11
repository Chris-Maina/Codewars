class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  };
}

class PriorityQueue {
  constructor() {
    this.pqueue = [];
  }

  enqueue(data, priority) {
    const node = new Node(data, priority);
    let added = false;
    for (let i = 0; i <= this.pqueue.length; i++) {
      if (node.priority < this.pqueue[i].priority) {
        this.pqueue.splice(i, 0, node);
        added = true;
        break;
      }
    }
    if (!added) {
      this.pqueue.push(node);
    }
  }

  dequeue() {
    return this.pqueue.shift();
  }

  isEmpty() {
    return this.pqueue.length === 0;
  }

  printQueue() {
    let data;
    this.pqueue.forEach(el => {
      data += el.data;
    });
    return data;
  }
}
