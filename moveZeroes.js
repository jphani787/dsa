function moveZeroes(nums) {
  let p1 = 0; // Pointer for the position to place the next non-zero element
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[p1] = nums[i];
      p1++;
    }
  }

  for (let i = p1; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}

const nums = [0, 1, 0, 3, 12];

console.log(moveZeroes(nums)); // Output: [1, 3, 12, 0, 0]
