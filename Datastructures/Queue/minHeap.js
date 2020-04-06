/* Heap is an implementation of Priority Queue that has the best time complexity

  parent index = (index - 1) / 2
  left index = 2*index + 1
  right index = 2*index + 2
 */

class MinHeap {
  constructor() {
    this.items = [];
  }

  parentIndex = index => Math.floor((index - 1) / 2);
  leftIndex = index => 2 * index + 1;
  rightIndex = index => 2 * index + 2;

  hasLeftChild = index => {
    return Boolean(this.items[this.leftIndex(index)]);
  };
  hasRightChild = index => {
    return Boolean(this.items[this.rightIndex(index)]);
  };

  hasParent = index => {
    return Boolean(this.items[this.parentIndex(index)]);
  };

  swap = (firstIndex, secondIndex) => {
    const temp = this.items[firstIndex];
    this.items[firstIndex] = this.items[secondIndex];
    this.items[secondIndex] = temp;
  };

  size = () => this.items.length;

  /**
   * Starts bubbling from the last item on the queue.
   */
  bubbleUp = () => {
    let index = this.size() - 1;

    while (
      hasParent(index) &&
      this.items[this.parentIndex(index)] > this.items[index]
    ) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  };

  /**
   * Starts bubbling from the first item in the queue
   */
  bubbleDown = () => {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerIndex = this.leftIndex(index);
      if (
        this.hasRightChild(index) &&
        this.items[this.rightIndex(index)] < this.items[this.leftIndex(index)]
      ) {
        smallerIndex = this.rightIndex(index);
      }
      if (this.items[index] < this.items[smallerIndex]) break;
      this.swap(index, smallerIndex);
      index = smallerIndex;
    }
  };

  /**
   * Polling is deleting. Normally delete the first item i.e. root.
   */
  poll = () => {
    this.items.shift();
    const lastItem = this.items[this.size() - 1];
    this.items.unshift(lastItem);
    this.bubbleDown();
  };

  add = item => {
    this.items.push(item);
    this.bubbleUp();
  };
}
