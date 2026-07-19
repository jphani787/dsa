const groupAnagrams = (strs) => {
  //   if (!strs[0]) return [strs];
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i].split("").sort().join("");
    // console.log(map, str, i);
    map[str] = map[str] ? [strs[i], ...map[str]] : [strs[i]];
  }

  return Object.values(map);
};
// let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let strs = ["", "b"];
console.log(groupAnagrams(strs));
