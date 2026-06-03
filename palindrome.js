function palindrome(n) {
  if (n < 0) return false;
  let reverseStr = 0;
  let str = n;
  while (str > 0) {
    let lastDIgit = str % 10;
    reverseStr = reverseStr * 10 + lastDIgit;
    str = Math.floor(str / 10);
  }
  console.log(reverseStr, n);
  return reverseStr === n;
}
let str = 12321;
console.log(palindrome(str));
