const largestOddNumber = (num) => {
  let n = num.length - 1;
  let res = "";
  while (n >= 0) {
    if (Number(num[n]) % 2 !== 0) {
      res = num.slice(0, n + 1);
      break;
    }
    n--;
  }
  return res ?? "";
};
let num = "35427";
console.log(largestOddNumber(num));
