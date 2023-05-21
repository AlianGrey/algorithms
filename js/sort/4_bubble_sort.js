let arr = [6, 5, 3, 1, 9, 4, 0, 13, 26, 7, -17, 5, -24, 100, -50, 45]
let count = 0;

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
            count += 1;
        }
    }
    return array;
}

console.log('mas = ', bubbleSort(arr))
console.log('length = ', arr.length)
console.log('count = ', count); //O(n*n)