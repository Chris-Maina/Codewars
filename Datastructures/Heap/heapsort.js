/**
 * @description Heapsort algorithm
 * Time complexity: O(nlogn) i.e. heapify = O(n) + siftDown(log n) called n times
 *  1. Build a max heap i.e heapify
 *  2. Swap the first element(max) with the final element. Decrease the considered range
 *     by one
 *  3. Sift down to restore heap property
 *  4. Repeat steps 2 and 3 until the considered range is one
 * @param {number[]} a
 * @param {number} count
 * @returns {number[]}
 */
const heapSort = (a, count) => {
  // build a max heap i.e heapify
  buildMaxHeap(a, count);
  let end = count - 1;
  while (end >= 0) {
    // swap the first element with the last n times
    swap(0, end, a);
    // reduce
    end -= 1;
    // sift down to restore heap order
    siftDown(a, 0, end);
  }
  return a;
}
 
/**
 * Builds out a max heap
 * @param {number[]} a 
 * @param {number} count 
 */
const buildMaxHeap = (a, count) => {
  // start from the end. Find parent of the last element in a
  let start = isParent(count - 1);
  while (start >= 0) {
    // sift down such that all nodes below start are in heap order
    siftDown(a, start, count - 1);
    // go to the next parent node
    start -= 1;
  }
}

// /**
//  * Builds out a max heap recursively
//  * @param {number[]} a 
//  * @param {number} count 
//  * @param {number} index
//  */
// const heapify = (a, count, index) => {
//   let largest = index;
//   let leftChild = 2 * index + 1;
//   let rightChild = 2 * index + 2;

//   if (leftChild < count && a[largest] < a[leftChild]) {
//     largest = leftChild;
//   }

//   if (rightChild < count && a[largest] < a[rightChild]) {
//     largest = rightChild
//   }

//   if (largest !== index) {
//     swap(largest, index, a);
//     heapify(a, count, largest);
//   }
// }

/**
 * Restores heap property while going down
 * Time complexity: O(n)
 * @param {number[]} a 
 * @param {number} start 
 * @param {number} end
 */
const siftDown = (a, start, end) => {
  let root = start;

  // While the root has atleast one child
  while (isLeftChild(root) <= end) {
    let child = isLeftChild(root);
    let swap = root;

    if (a[swap] < a[child]) {
      swap = child;
    }
    // check if there is a right child, compare it
    if (child + 1 <= end && a[swap] < a[child + 1]) {
      swap = child + 1;
    }

    if (a[swap] === a[root]) return
    swap(swap, root, a);
    root = swap
  }
}

/**
 * Gets the parent index of the node index passed
 * @param {number} index
 * @returns {number} 
 */
const isParent = index => Math.floor((index - 1)/ 2);

/**
 * Gets the left child of index
 * @param {number} index 
 */
const isLeftChild = index => (2 * index + 1);

/**
 * Gets the right child of index
 * @param {number} index 
 */
const isRightChild = index => (2 * index + 2);

/**
 * Performs swapping of elements in an array
 * @param {number} firstIndex 
 * @param {number} secondIndex
 * @param {number[]} arr
 */
const swap = (firstIndex, secondIndex, arr) => {
  let temp = arr[secondIndex];
  arr[secondIndex] = arr[firstIndex];
  arr[firstIndex] = temp;
}

const heapify = (a, count) => {
  // start from the first child in the array
  let end = 1;
  while (end < count) {
    /**
     * Sift up node at index end such that all nodes above end
     * are in heap order
     */
    siftUp(a, 0, end);
    end += 1;
  }
}

/**
 * 
 * @param {number[]} a 
 * @param {number} start 
 * @param {number} end
 */
const siftUp = (a, start, end) => {
  /**
   * Start represents how far up the heap to sift.
   * end is the node to sift up
   */
  let child = end;
  while(child > start) {
    let parent = isParent(child);
    if (a[parent] < a[child]) {
      // out of max-heap order
      swap(parent, child, a);
      child = parent;
    } else {
      return
    }
  }
}