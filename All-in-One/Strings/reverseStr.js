const reverseStr = (s, k) => {
  let count = s.length;
  if (count < k) return s;
  let str = s.slice(2, count);
  let splitCount = 0;
  let chunkArr = [];
  for (let i = 0; i < count; i++) {
    splitCount++;
    if (splitCount === 4) {
      // chunkArr.push()
      console.log(s.slice(0, splitCount));
    }
  }

  for (let i = 0; i < 2; i++) {
    str = s[i] + str;
  }
  return str;
};

// let s = "ab";
let s = "abcdefg";
let k = 2;
console.log(reverseStr(s, k));
