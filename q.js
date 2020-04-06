function quickSort(arr) {
  function partition(low, high) {
    // pivot (Element to be placed at right position)
    const pivot = arr[high];

    let i = low - 1; // Index of smaller element

    for (let j = low; j < high; j++) {
      // If current element is smaller than the pivot
      if (arr[j] < pivot) {
        i++; // increment index of smaller element
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }

  function q(low, high) {
    if (low < high) {
      /* pi is partitioning index, arr[pi] is now at right place */
      const pi = partition(low, high);

      q(low, pi - 1); // Before pi
      q(pi + 1, high); // After pi
    }
  }
  q(0, arr.length - 1);
}

const nums = [9, 2, 5, 6, 8, 7];
console.log(nums);
quickSort(nums);
console.log(nums);
