//sort out array to stay unique elements of array
let arr = [1, 2, 4, 7, 5, 8, 9, 3, 4, 5]
let tmp;
tmp = [...new Set(arr)];
console.log(tmp)
