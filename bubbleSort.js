function bubbleSort(nums) {
  let n = nums.length;
  // let count = 0;
  for (let i = 0; i < n; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        // console.log(count++);
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;

        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return nums;
}

const nums = [5, 2, 1, 4, 0, 3];
console.log(bubbleSort(nums));
