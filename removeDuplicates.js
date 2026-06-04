const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[k]) {
      k = k + 1;
      nums[k] = nums[i];
    }
  }
  return [k + 1, ...nums];
}

console.log(removeDuplicates(nums)); // [5, 0, 1, 2, 3, 4]
