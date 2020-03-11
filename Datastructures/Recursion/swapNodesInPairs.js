/**
 Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

 

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.

 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  swapHelper(head);
  return head;
};

var swapHelper = function(head) {
  let val;
  let nextVal;
  if(!head || !head.next) {
      return;
  }
  val = head.val;
  nextVal = head.next.val;
  head.val = nextVal;
  head.next.val = val;
  return swapHelper(head.next.next);
}
