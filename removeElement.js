function removeElement(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k = k + 1;
    }
  }
  return k;
}
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
console.log(removeElement(nums, val)); // [5, [0, 1, 3, 0, 4]]
