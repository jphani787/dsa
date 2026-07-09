function reverse(str) {
  let count = str.length - 1;
  let res = "";
  while (count >= 0) {
    res = res + str[count];
    count--;
  }
  return res;
}
let str = "Hello";
console.log(reverse(str));
