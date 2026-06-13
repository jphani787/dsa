function hasCycle(head) {
  let seenNodes = new Set();
  let curr = head;
  while (curr) {
    if (seenNodes.has(curr)) {
      return true;
    }

    seenNodes.add(curr);
    curr = curr.next;
  }
  return false;
}
const head = [3, 2, 0, -4];
console.log(hasCycle(head));
