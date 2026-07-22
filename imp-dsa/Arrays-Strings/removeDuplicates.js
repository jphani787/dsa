const removeDuplicates = (nums) => {
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return nums;
};

const nums = [1, 1, 2, 2, 3];
console.log(removeDuplicates(nums));
