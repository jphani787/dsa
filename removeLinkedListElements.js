//Remove Linked List Elements
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function removeLinkedListElements(head, val) {
  let sentinal = new ListNode();
  sentinal.next = head;
  let prev = sentinal;
  while (prev && prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }

  return sentinal.next;
}
let head = [1, 2, 6, 3, 4, 5, 6];
let val = 6;
console.log(removeLinkedListElements(head, val));
