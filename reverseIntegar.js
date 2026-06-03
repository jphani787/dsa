function reverseInteger(x) {
  let xCopy = x;
  let reversed = 0;
  x = Math.abs(x);
  while (x > 0) {
    let last = x % 10;
    reversed = reversed * 10 + last;
    x = Math.floor(x / 10);
  }

  let limit = Math.pow(2, 31);
  if (reversed < -limit || reversed > limit) return 0;

  return xCopy < 0 ? -reversed : reversed;
}

console.log(reverseInteger(123)); // 321
console.log(reverseInteger(-123));
