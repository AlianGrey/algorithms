let arr = [5, 1, 45, -65, 0, 4, 19, -32, 34, -9, 4, 2, 78, -93]
let count = 0;

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let bigger = [];
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (i === pivotIndex) {
            continue;
        }
        if (array[i] > pivot) {
            bigger.push(array[i]);
        }
        else {
            less.push(array[i]);
        }
    }
    return [...quickSort(less), pivot, ...quickSort(bigger)];

}

console.log(quickSort(arr));
console.log('count = ', count);