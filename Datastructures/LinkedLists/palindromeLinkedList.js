/**
  Given a singly linked list, determine if it is a palindrome.

  Example 1:

  Input: 1->2
  Output: false

  Example 2:

  Input: 1->2->2->1
  Output: true

*/


/////////////////////// SOLUTION ///////////////////////

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) return true;

  let { reversed, copy } = getReversedAndCopiedLinkedList(head);
  while (copy) {
    if (copy.val !== reversed.val) return false;
    reversed = reversed.next;
    copy = copy.next
  }
  return true;
};


function getReversedAndCopiedLinkedList(head) {
  let curr = head;
  let reversed = null;
  let copy = null; // copy iterator
  let copyHead = null;

  while (curr) {
    // Make a copy of the linked list
    let newNode = new ListNode(curr.val);
    if (!copy) {
      copy = newNode;
      copyHead = copy;
    } else {
      copy.next = newNode;
      copy = copy.next;
    }

    // Reverse the linked list
    let next = curr.next;
    curr.next = reversed;
    reversed = curr;
    curr = next;
  }
  return { reversed, copy: copyHead }
}