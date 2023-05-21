let arr = [1, 3, 7, 2, 5, 9, 6, 4, 7];
let count = 0;

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === item) {
            return i;
        }
    }
    return null
}

console.log(linearSearch(arr, 7));
console.log('count = ', count); //O(n)