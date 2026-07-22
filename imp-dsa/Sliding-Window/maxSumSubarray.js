const maxSumSubarray = (arr, k) => {
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSize = windowSum;
  for (let end = k; end < arr.length; end++) {
    windowSum += arr[end] - arr[end - k];
    maxSize = Math.max(maxSize, windowSum);
  }
  return maxSize;
};

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // 9
