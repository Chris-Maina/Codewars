/**
  Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.
  Both l1 and l2 are sorted in non-decreasing order.


  Example 1:

  Input: l1 = [1,2,4], l2 = [1,3,4]
  Output: [1,1,2,3,4,4]

  Example 2:

  Input: l1 = [], l2 = []
  Output: []

  Example 3:

  Input: l1 = [], l2 = [0]
  Output: [0]

*/


/////////////////////// SOLUTION ///////////////////////

/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let dummyNode = new ListNode();
  let head = dummyNode;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      dummyNode.next = l1;
      l1 = l1.next;
    } else {
      dummyNode.next = l2;
      l2 = l2.next;
    }
    // go to the added node
    dummyNode = dummyNode.next;
  }

  if (!l1) {
    // add l2 
    dummyNode.next = l2;
  }
  if (!l2) {
    // add l1
    dummyNode.next = l1;
  }

  // since the first node is invalid, access next valid node
  return head.next;
};
