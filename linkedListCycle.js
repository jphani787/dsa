// function hasCycle(head) {
//   let seenNodes = new Set();
//   let curr = head;
//   while (curr) {
//     if (seenNodes.has(curr)) {
//       return true;
//     }

//     seenNodes.add(curr);
//     curr = curr.next;
//   }
//   return false;
// }

function hasCycle(head) {
  if (!head) return false;
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    if (!fast || !fast.next) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}

const head = [3, 2, 0, -4];
console.log(hasCycle(head));
