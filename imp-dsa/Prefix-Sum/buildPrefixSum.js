const buildPrefixSum = (arr) => {
  let n = 1;
  let preFix = arr[0];
  while (n < arr.length) {
    arr[n] = preFix + arr[n];
    preFix = arr[n];
    n++;
  }
  return arr;
};

console.log(buildPrefixSum([2, 4, 6, 8, 10])); // [2, 6, 12, 20, 30]
