function rotateRight(head, k) {
  if (!head || !head.next || k === 0) return head;
  let s = head;
  let f = head;

  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }

  k = k % length;
  for (let i = 0; i < k; i++) {
    f = f.next;
  }

  while (f.next) {
    s = s.next;
    f = f.next;
  }

  f.next = head;
  let newHead = s.next;
  s.next = null;
  return newHead;
}

// let output = [2,0,1];
let head = [0, 1, 2];
let k = 4;
console.log(rotateRight(head, k));
