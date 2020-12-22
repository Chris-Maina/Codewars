/**
 Given the head of a linked list, return the list after sorting it in ascending order.

 Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?



 Example 1:

 Input: head = [4,2,1,3]
 Output: [1,2,3,4]

 Example 2:

 Input: head = [-1,5,3,4,0]
 Output: [-1,0,3,4,5]

 Example 3:

 Input: head = []
 Output: []

*/

 /////////////////////// SOLUTION ///////////////////////

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * The solution below use merge sort.
 * Divide the list into halves until you have a single node.
 * Combine/merge the halved lists while sorting them.
 * 
 * Time Complexity: O(nlog⁡n), where n is the number of nodes in linked list.
 * @param {Node} head 
 */
function sortList(head) {
  return divideMergeList(head);
}

function divideMergeList(node) {
  if (node === null || node.next === null) return node;
  const mid = findMiddleOfList(node);
  const left = divideMergeList(head);
  const right = divideMergeList(mid);
  return mergeTwoLists(left, right);
}

function findMiddleOfList(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function mergeTwoLists(l1, l2) {
  const dummyNode = new ListNode(0);
  const head = dummyNode;
  while(l1 && l2) {
    if (l1.val < l2.val) {
      dummyNode.next = l1;
      l1 = l1.next;
    } else {
      dummyNode.next = l2;
      l2 = l2.next
    }
    dummyNode = dummyNode.next;
  }

  return head.next
}

/**
 * @description Iterative bubble sort.
 * 1. Start with the first node and compares it with all other nodes.
 * 2. Repeat this for all other nodes
 * With bubble sort after the first iteration the least node will be on the left.
 * Time Complexity: O(N^2), where N is the number of nodes in the given list.
 */
var sortList = function(head) {
  if (!head || !head.next) return head;
  let currentNode = head;
  let tempNode;

  while(currentNode !== null && currentNode.next !== null) {
    tempNode = currentNode.next;
    let swaped = false;
    while (tempNode !== null) {
      if (currentNode.val > tempNode.val) {
        let tempVal = currentNode.val;
        currentNode.val = tempNode.val;
        tempNode.val = tempVal;
        swaped = true
      }
      tempNode = tempNode.next;
    }
    if (!swaped) break;
    currentNode = currentNode.next;
  }

  return head;
}

/**
 * @description Iterative selection sort.
 * Find the minimum at every step and swap
 * Time Complexity: O(N^2), where N is the number of nodes in the given list.
 * @param {ListNode} head
 * @return {ListNode}
 */
function sortList(head) {
  if (head === null || head.next === null) return head;

  let currentNode = head;
  while (currentNode !== null) {
    let iterator = currentNode;
    let min = currentNode;

    // look for minimum
    while (iterator !== null) {
      if (iterator.val < min.val) {
        min = iterator;
      }
      iterator = iterator.next;
    }

    // Set minimum as the first value and swap
    let temp = currentNode.val;
    currentNode.val = min.val;
    min.val = temp;

    currentNode = currentNode.next;
  }
  return head;
}