function selectionSort(a) {
  let n = a.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = a[i];
      a[i] = a[min];
      a[min] = temp;
    }
  }
  return a;
}
const arr = [7, 1, 5, 2, 4, 12, -10, 8, 9, 20, 3];
console.log(selectionSort(arr));
