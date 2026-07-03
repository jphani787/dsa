function middleNode(head) {
  return Math.floor(head.length / 2);
}

// let head = [1, 2, 3, 4, 5];
//Output: [3,4,5]

let head = [1, 2, 3, 4, 5, 6];
//Output: [4,5,6]

console.log(middleNode(head));
