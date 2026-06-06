function sumOfFirst(n) {
  if (n === 0) return 0;

  console.log(n);
  return n + sumOfFirst(n - 1);
}

console.log(sumOfFirst(5)); // 15
