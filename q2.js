/* The main function that implements QuickSort() 
arr[] --> Array to be sorted, 
low --> Starting index, 
high --> Ending index */
function quickSort(arr) {
    function partition(low, high) {
        let pivot = arr[high];

        // index of smaller element
        let i = low - 1;
        for (let j = low; j < high; j++) {
            // If current element is smaller
            // than the pivot
            if (arr[j] < pivot) {
                i++;

                // swap arr[i] and arr[j]
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        // swap arr[i+1] and arr[high] (or pivot)
        let temp1 = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp1;

        return i + 1;
    }

    function q(low, high) {
        if (low < high) {
            /* pi is partitioning index, arr[pi] is now at right place */
            let pi = partition(low, high);

            // Recursively sort elements before
            // partition and after partition
            q(low, pi - 1);
            q(pi + 1, high);
        }
    }

    q(0, arr.length - 1);
}

const a = [2, 3, 1];
quickSort(a, 0, a.length - 1);
console.log(a);
