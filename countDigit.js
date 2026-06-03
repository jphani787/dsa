function countDigits(num) {
  if (num === 0) {
    return 1;
  }
  let count = 0;
  num = Math.abs(num);
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
let num = -345236;
console.log(countDigits(num));
