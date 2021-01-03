// Linked list is a collection of connected nodes
// data is the information being stored
// next is the reference to the next node

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  size() {
    let count=0;
    let node = this.head;
    while(node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if(!node) return this.head;
    while(node) {
      if(!node.next) return node;
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if(!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if(!this.head) return;
    if(!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while(node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  insertLast(data) {
    const node = new Node(data);
    let lastNode = this.getLast();
    if(!lastNode) {
      this.head = node;
      return this.head;
    }
    lastNode.next = node;
    return lastNode.next;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while(node) {
      if (index === counter) return node;
      counter++
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if(!this.head) return;
    if(index === 0) {
      this.head = this.head.next;
      return;
    }
    // Locate the node that comes before the node to be deleted
    const previousNode = this.getAt(index-1);
    if(!previousNode || !previousNode.next) return;
    // Make the previous point to the deleted node next node
    previousNode.next = previousNode.next.next;

    /**
     *
     * One can also get the node to be deleted. Copy next node's val followed by modifying next val
     * const node = this.getAt(index);
     * node.val = node.next.val;
     * node.next = node.next.next;
     */
  }

  // 1 -> 2 -> 4  insert 3 at index 2
  insertAt(data, index) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    };
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    const previousNode = this.getAt(index-1) || this.getLast();
    
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    // OR
    // const node = new Node(data, previousNode.next)
    // previousNode.next = node;
  }
}
