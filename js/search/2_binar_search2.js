let arr = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let count = 0;

function linearSearch(array, item) {
    let start = 0
    let end = array.length
    let middle
    let position = -1
    let found = false

    while (found === false && start <= end) {
        count = count + 1;
        middle = Math.floor((start + end) / 2);
        if (item === array[middle]) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        }
        else {
            start = start + 1;
        }
    }
    return position;

}


console.log('count = ', count)
console.log('position = ', linearSearch(arr, 8))