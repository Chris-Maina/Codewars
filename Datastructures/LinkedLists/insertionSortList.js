/**
Sort a linked list using insertion sort.


A graphical example of insertion sort. The partial sorted list (black) initially contains only the first element in the list.
With each iteration one element (red) is removed from the input data and inserted in-place into the sorted list


Algorithm of Insertion Sort:

    Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
    At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
    It repeats until no input elements remain.


Example 1:

Input: 4->2->1->3
Output: 1->2->3->4

Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5
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
 * @description Insertion sort list
 * Iterate the list growing the sorted list behind it. The outer loop runs
 * over all the elements except the FIRST node, because it is trivially sorted.
 * The inner loop moves current node to its correct place so that after the loop,
 * from the head to previous node is sorted.
 * 
 * Time Complexity: O(N^2)
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (head === null) return null;

  let currentNode = head.next;
  while (currentNode !== null) {
    let iterator = head;
    /**
     * Compare key with each node on the left of it until a node with value smaller than it is found.
     * Swap if you find one. Else leave and continue iterating
     */
    while (iterator !== currentNode) {
      // swap here
      if (iterator.val > currentNode.val) {
        let temp = iterator.val;
        iterator.val = currentNode.val;
        currentNode.val = temp;
      }
      iterator = iterator.next;
    }
    currentNode = currentNode.next;
  }
  return head;
};
