const moveZeroes = (nums) => {
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[slow] < nums[fast]) {
      let temp = nums[fast];
      nums[fast] = nums[slow];
      nums[slow] = temp;
      slow++;
    }
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]
