/**
 
  Reverse a singly linked list.

  Example:

  Input: 1->2->3->4->5->NULL
  Output: 5->4->3->2->1->NULL

  Follow up:

  A linked list can be reversed either iteratively or recursively. Could you implement both?

*/

/////////////////////// SOLUTION ///////////////////////

/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let curr = head;
  let prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};