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
 var oddEvenList = function(head) {
    let odd, even, oddStart, evenStart = null
    while(head) {
        if(head.val % 2 === 0) {
            if(even) {
                // even.next = head
                even.next = head
                even = head
            } else {
                even = head
                evenStart = head
            }
         console.log('even', evenStart)
        } else {
            if(odd) {
                odd.next = head
                odd = head
            } else {
                odd = head
                oddStart = head
            }
            console.log('odd', oddStart)
        }  
        head = head.next
    }
    if(odd) {
        odd.next = evenStart
        even.next = null
        return oddStart
    } else {
        return evenStart
    }
};