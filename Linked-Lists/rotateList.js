function rotateRight(head, k) {
  let len = head.length;
  let rotate = k % len;
  let empty = [];
  //   while (rotate) {
  //     empty[len - 1] = head[len - 1];
  //     console.log(k % len, rotate);
  //     rotate--;
  //   }
  const f = [...head.slice(rotate)];
  console.log(head.slice(rotate));
}

// let output = [2,0,1];
let head = [0, 1, 2];
let k = 4;
console.log(rotateRight(head, k));
