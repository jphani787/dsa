function chunkArray(arr, chunks) {
  let count = 0;
  let result = [];
  for (let i = 0; i < chunks; i++) {
    let sizeStart = i * chunks;
    result.push(arr.slice(sizeStart, sizeStart + chunks));
  }
  return result;
}

// let arr = [1, 2, 3, 4, 5];
// let chunks = 2;

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let chunks = 3;
console.log(chunkArray(arr, chunks));
