//Intersection of Two Linked Lists

function intersectionofTwoLinkedLists(headA, headB) {
  let store = new Set();
  while (headB) {
    store.add(headB);
    headB = headB.next;
  }

  while (headA) {
    if (store.has(headA)) {
      return headA;
    }
    headA = headA.next;
  }

  return null;
}
let headA = [1, 9, 1, 2, 4];
let headB = [3, 2, 4];

console.log(intersectionofTwoLinkedLists(headA, headB));
