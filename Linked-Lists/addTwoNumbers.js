function addTwoNumbers(l1, l2) {
  let ans = new ListNode();
  let ansHead = ans;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;
    let newNode = new ListNode(digit);
    ans.next = newNode;
    ans = ans.next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return ansHead.next;
}

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
