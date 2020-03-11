// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node =>(node.data !== data));
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  /**
   * @name traverseBF
   * @description Create an empty array. Insert the root node.
   * While there is sth in the arr, remove the first element, get it's children and push them to the array
   * @param {function} fn 
   */
  traverseBF(fn) {
    const arr = [];
    arr.push(this.root);
    while (arr.length) {
      const node = arr.shift();
      /**
       * spread the array of children to get the individual elements inside the array. 
       * Add them to the end of the arr
       */
      arr.push(...node.children);
      fn(node);
    }
  }

  /**
   * @name traverseDF
   * @description Create an empty array. Insert the root node.
   * While the is sth in the arr, remove the first element, get it's children and add  them to the START of the arr.
   * @param {function} fn 
   */
  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      /**
       * spread the array of children to get the individual elements inside the array.
       * Add them to the start of the arr
       */
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };