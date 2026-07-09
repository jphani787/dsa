function sentenceCapitalization(str) {
  let count = str.length - 1;
  let res = "";
  while (count >= 0) {
    if (str[count] === " ") {
      res = " " + str[count + 1].toUpperCase() + res.slice(1, res.length);
    } else if (str[count] === str[0]) {
      res = str[count].toUpperCase() + res;
    } else {
      res = str[count] + res;
    }
    count--;
  }
  return res;
}
let str = "hello world";
console.log(sentenceCapitalization(str));
