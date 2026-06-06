function missingNumber(nums) {
  let n = nums.length;
  let total = (n * (n + 1)) / 2;
  let pSum = 0;
  for (let i = 0; i < n; i++) {
    pSum = pSum + nums[i];
  }
  return total - pSum;
}

let nums = [3, 0, 1];
console.log(missingNumber(nums));
