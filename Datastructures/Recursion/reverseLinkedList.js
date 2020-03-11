/**
 * 
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
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
var reverseList = function(head) {
  let previous = null;
  previous = reverse(head, previous);
  return previous;                                                                   
};

var reverse = function(head, previous) {
  let node;
  if (!head) {
      return previous;
  }
  node = head.next;
  head.next = previous;
  previous = head; // previous for the next iteration is the current/modified node.
  return reverse(node, previous);
}

// OR
/**
 var reverseList = function(head) {
    if (head == null || head.next == null) return head;
    let previous = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return previous;
};
 */

/***
 * Iterative approach
 * 
 * While you are traversing the list, change the current node's next pointer to point to its previous element. 
 * Since the first node does not have reference to its previous node, you must store its previous element beforehand.
 */

 var reverseList = function(head) {
   let previous = null;
   let curr = head;
   let node;
   while (curr !== null) {
    node = curr.next;
    curr.next = previous;
    previous = curr;
    curr = node;
   }
   return previous;
 }