const maxFreqSum = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let hashMap = {};
  for (let i = 0; i < str.length; i++) {
    hashMap[str[i]] = hashMap[str[i]] ? hashMap[str[i]] + 1 : 1;
  }

  let maxCon = 0;
  let maxVow = 0;
  for (let hash of Object.keys(hashMap)) {
    if (vowels.includes(hash)) {
      maxVow = Math.max(maxVow, hashMap[hash]);
    } else {
      maxCon = Math.max(maxCon, hashMap[hash]);
    }
  }
  return maxVow + maxCon;
};

const str = "aeiaeia";
console.log(maxFreqSum(str));
