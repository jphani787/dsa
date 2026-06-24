function removeNthFromEnd1(head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;
  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }

  let prevPos = length - n;
  let prev = sentinel;
  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
  return sentinel.next;
}

function removeNthFromEnd2(head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;
  let first = sentinel;
  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  let second = sentinel;
  while (first.next) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return sentinel.next;
}
