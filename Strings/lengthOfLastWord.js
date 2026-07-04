function lengthOfLastWord(s) {
  const sl = s.trim().split(" ");
  return sl[sl.length - 1].length;
}
let s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));
