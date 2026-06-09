// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// let arr = [5, 6, 4, 7, 2, 0, 3];
// let target = 0;
// console.log(linearSearch(arr, target));

// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (right >= left) {
//     let middle = Math.floor(right + left / 2);
//     console.log(middle, right + left, left, right);
//     if (arr[middle] === target) {
//       return middle;
//     } else if (target > arr[middle]) {
//       left = middle + 1;
//     } else {
//       right = middle - 1;
//     }
//   }
//   return -1;
// }

// let arr = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// // let arr = [-1, 0, 3, 5, 9, 12];
// let target = 5;

// console.log(binarySearch(arr, target));

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {

//   }
// }
// let arr = [5, 2, 4, 1];
// console.log(bubbleSort(arr));

// function selectionSort(nums) {
//   let n = nums.length;
//   for (let i = 0; i < n - 1; i++) {
//     let min = i;
//     for (let j = i + 1; j < n; j++) {
//       if (nums[j] < nums[min]) {
//         min = j;
//       }
//     }
//     if (min != i) {
//       let temp = nums[i];
//       nums[i] = nums[min];
//       nums[min] = temp;
//     }
//   }
//   return nums;
// }
// let nums = [7, 1, 5, 4, 3, 2];
// let n = 6;
// console.log(selectionSort(nums));

// function insertionSort(nums) {
//   for (let i = 1; i < nums.length; i++) {
//     let current = nums[i];
//     let prev = i - 1;
//     while (nums[prev] > current && prev >= 0) {
//       nums[prev + 1] = nums[prev];
//       prev--;
//     }
//     nums[prev + 1] = current;
//   }
//   return nums;
// }

// let nums = [7, 4, 3, 5, 1, 2];
// console.log(insertionSort(nums));

function mergeSort(nums) {
  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  let left = mergeSort(nums.slice(0, mid));
  let right = mergeSort(nums.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  return [...res, ...left.slice(i), ...right.slice(j)];
}

let nums = [7, 4, 3, 5, 1, 2];
console.log(mergeSort(nums));
