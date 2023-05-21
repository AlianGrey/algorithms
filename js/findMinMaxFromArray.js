//task three - Find Min, Max
const marks = [50, 20, 70, 65, 45, 30, 0, -34, 56, -120, 456]

//option one
//use function Math.min or Math.max(...arr) through spred operator
function findMin(arr) {
    return Math.min(...arr);
}
console.log('array = ', marks, '; Min = ', findMin(marks))

//option two
//use for
function findMin2(arr) {
    if (arr.length == 0) { return undefined; }
    let min = arr[0];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}
console.log('Min = ', findMin2(marks))

//option three
//use forEach
function findMax3(arr) {
    if (arr.length == 0) { return undefined; }
    let max = arr[0];
    arr.forEach((element) => {
        if (element > max) { max = element; }
    })
    return max;
}
console.log('Max = ', findMax3(marks))
