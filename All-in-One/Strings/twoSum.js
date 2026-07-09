function twoSum(arr, target) {
  let start = 0;
  let last = arr.length - 1;
  let result = [];
  //   for (i = 0; i < arr.length; i++) {
  //     if (arr[i] + arr[i + 1] === target) {
  //       result.push(i, i + 1);
  //       break;
  //     }
  //   }

  let seen = new Map();
  for (let i = 0; i < arr.length; i++) {
    let exist = target - arr[i];
    if (seen.has(exist)) {
      return [seen.get(exist), i];
    }
    seen.set(arr[i], i);
  }
  return result;
}
let arr = [2, 7, 11, 15];
let target = 9;

// let arr = [3, 2, 4];
// let target = 6;

// let arr = [3, 2, 3];
// let target = 6;

console.log(twoSum(arr, target));
