const reverseArray = (arr) => {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    [arr[r], arr[l]] = [arr[l], arr[r]];
    l++;
    r--;
  }
  return arr;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
// [5, 4, 3, 2, 1]
