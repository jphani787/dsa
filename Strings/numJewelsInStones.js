function numJewelsInStones(jewels, stones) {
  let count = 0;
  //   for (let i = 0; i < stones.length; i++) {
  //     for (let j = 0; j < jewels.length; j++) {
  //       if (stones[i] === jewels[j]) {
  //         count++;
  //         break;
  //       }
  //     }
  //   }

  let setStones = new Set();
  let j = 0;
  while (j < jewels.length) {
    setStones.add(jewels[j]);
    j++;
  }

  for (let i = 0; i < stones.length; i++) {
    if (setStones.has(stones[i])) {
      count++;
    }
  }

  return count;
}

let jewels = "z";
let stones = "ZZ";
console.log(numJewelsInStones(jewels, stones));
