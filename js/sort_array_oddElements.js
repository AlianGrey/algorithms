//we need to sort an array  of odd numbers only
let arr = [10, 23, 14, 56, 77, 4, 5, 6, 8, 9]  //23,77,5,9  => 5,9,23,77  => res= [10, 5, 14, 56, 9, 4, 23, 6, 8, 77]

function sortOddElements(arr) {
    let res = [];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2) {
            res.push(arr[i]);
        }
    }
    res.sort((a, b) => a - b);
    console.log('arr = ', arr)
    console.log('res = ', res)

    let j = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2) {
            arr[i] = res[j];
            j++;
        }
    }
    return arr;
}

console.log('sort odd elements result = ', arr)
