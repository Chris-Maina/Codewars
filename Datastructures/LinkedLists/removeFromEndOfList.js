/**
  Given the head of a linked list, remove the nth node from the end of the list and return its head.

  Follow up: Could you do this in one pass?



  Example 1:

  Input: head = [1,2,3,4,5], n = 2
  Output: [1,2,3,5]

  Example 2:

  Input: head = [1], n = 1
  Output: []

  Example 3:

  Input: head = [1,2], n = 1
  Output: [1]

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return;

  let temp = head;
  // Get size of linked list
  let size = 1;
  while (temp.next) {
    temp = temp.next;
    size++;
  }
  // reassign temp
  temp = head;
  size -= n;

  // handle deleting head
  if (size === 0) {
    head = head.next;
    return head;
  }

  for (let i = 1; i < size; i++) {
    temp = temp.next;
    if (!temp) break;
  }
  if (!temp || !temp.next) return null;
  // delete here
  temp.next = temp.next.next;
  return head;
};