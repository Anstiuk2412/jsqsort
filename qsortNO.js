const arr = [123, 6, 46, 98, 32, 6, 55];
const qsort = (arr) => {
  if (arr.length == 0) {
    return arr;
  }
  const pivot = arr[0];
  const less = [];
  const high = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) less[less.length] = arr[i];
    else high[high.length] = arr[i];
  }
  return qsort(less).concat(pivot, qsort(high));
};
console.log(qsort(arr));
