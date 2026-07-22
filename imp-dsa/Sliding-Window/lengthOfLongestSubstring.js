const lengthOfLongestSubstring = (s) => {
  let seen = new Set();
  for (let i = 0; i < s.length; i++) {
    if (!seen.has(s[i])) {
      seen.add(s[i]);
    }
  }
  //   console.log(seen);
  return seen.size;
};
let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // 3
