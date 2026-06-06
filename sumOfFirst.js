// function sumOfFirst(n) {
//   if (n === 0) return 0;
//   return n + sumOfFirst(n - 1);
// }
// console.log(sumOfFirst(5)); // 15

let nums = [5, 3, 2, 0, 1];
function sumOfAllElements(n) {
  if (n === 0) return nums[0];
  let f = nums[n] % 2 !== 0 ? nums[n] : 0;
  f = f + sumOfAllElements(n - 1);
  return f;
}

console.log(sumOfAllElements(nums.length - 1)); // 15
