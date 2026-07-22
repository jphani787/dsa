// const twoSumSorted = (arr, target) => {
//   let l = 0;
//   let r = arr.length - 1;
//   while (l < r) {
//     let sum = arr[l] + arr[r];
//     console.log(sum, l, r);
//     if (sum === target) {
//       return [l, r];
//     } else if (sum < target) {
//       r--;
//     } else {
//       l++;
//     }
//   }
//   return [];
// };

// console.log(twoSumSorted([11, 3, 5, 2, 8, 15], 5)); // [1, 3]

// const maxProfit = (prices) => {
//   let minProfit = prices[0];
//   let maxProfit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     let currentPrice = prices[i];
//     maxProfit = Math.max(maxProfit, currentPrice - minProfit);
//     minProfit = Math.min(minProfit, currentPrice);
//   }
//   return maxProfit;
// };

// console.log(maxProfit([2, 4, 1, 7]));
// const groupAnagrams = (strs) => {
//   let map = {};
//   for (let i = 0; i < strs.length; i++) {
//     let str = strs[i].split("").sort().join("");
//     map[str] = map[str] ? [...map[str], strs[i]] : [strs[i]];
//   }
//   return Object.values(map);
// };

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// //[["bat"],["nat","tan"],["ate","eat","tea"]]

const topKFrequentElements = (nums, k) => {
  let freElm = {};
  for (let i = 0; i < nums.length; i++) {
    freElm[nums[i]] = freElm[nums[i]] ? freElm[nums[i]] + 1 : 1;
    // console.log(freElm[nums[i]]);
    // if (!freElm.includes(nums[i])) {
    //   freElm.push(nums[i]);
    // }
    // if (freElm.length === k) {
    //   return freElm;
    // }
  }

  for (let k in Object.keys(freElm)) {
    console.log(k, freElm[k]);
  }
  return freElm;
};
let nums = [1, 1, 1, 2, 2, 3, 3, 3];
let k = 2;
console.log(topKFrequentElements(nums, k));
