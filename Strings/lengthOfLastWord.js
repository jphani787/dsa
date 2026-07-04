function lengthOfLastWord(s) {
  //   const sl = s.trim().split(" ");
  //   return sl[sl.length - 1].length;

  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] === " ") {
      n--;
    } else {
      break;
    }
  }
  let nLength = 0;
  while (n >= 0) {
    if (s[n] !== " ") {
      nLength++;
      n--;
    } else {
      break;
    }
  }
  console.log(s.length, n, nLength);
}
let s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));
