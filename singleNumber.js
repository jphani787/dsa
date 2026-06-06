function singleNumber(nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
}

let nums = [2, 2, 1];
console.log(singleNumber(nums));
