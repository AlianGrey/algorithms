let arr = [6, 5, 3, 1, 9, 4, 0, 13, 26, 7, -17, 5, -24]
let count = 0

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
            count += 1;
            console.log('i = ', i, 'elem = ', array[i], 'j = ', j, 'elem = ', array[j], 'min= ', array[minIndex]);
        }
        let tmp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = tmp

    }
    return array;
}


console.log('mas = ', selectionSort(arr))
console.log('count = ', count)  //O(n*n)