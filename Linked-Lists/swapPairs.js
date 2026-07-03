// function swapPairs1(head) {
//   if (!head || !head.next) return head;
//   let sentinel = new ListNode();
//   sentinel.next = head;
//   let p = sentinel;
//   let c = head;
//   let n = head.next;
//   while (c && n) {
//     p.next = n;
//     c.next = n.next;
//     n.next = c;

//     p = c;
//     c = p.next;
//     n = c && c.next;
//   }
//   return sentinel.next;
// }

// const head = [1, 2, 3, 4];
// // output: [2, 1, 4, 3]
// console.log(swapPairs1(head)); // [2,1,4,3]

function swapPairs2(head) {
  if (!head || !head.next) return head;
  let l = head;
  let r = head.next;
  l.next = swapPairs2(r.next);
  r.next = l;
  return r;
}

const head = [1, 2, 3, 4];
// output: [2, 1, 4, 3]
console.log(swapPairs2(head)); // [2,1,4,3]
