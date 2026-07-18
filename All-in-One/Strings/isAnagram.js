const isAnagram = (s, t) => {
  if (s.length != t.length) return false;
  let n = 0;
  let count = 0;
  let hashS = {};
  while (n < s.length) {
    hashS[s[n]] = hashS[s[n]] ? hashS[s[n]] + 1 : 1;

    n++;
  }

  for (let i = 0; i < t.length; i++) {
    if (!hashS[t[i]] || hashS[t[i]] < 0) {
      return false;
    } else {
      --hashS[t[i]];
    }
  }

  return true;
};
let s = "aacc";
let t = "ccac";
console.log(isAnagram(s, t));
