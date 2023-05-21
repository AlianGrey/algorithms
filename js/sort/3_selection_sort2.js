let arr = [5, 2, 7, 8, -2, 0, 10, 35, -45]
let count = 0;

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = 1; j < array.length; j++) {
            count += 1;

            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        let tmp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = tmp;
    }
    return array;
}


console.log('mas = ', selectionSort(arr));
console.log('length = ', arr.length);
console.log('count = ', count);
