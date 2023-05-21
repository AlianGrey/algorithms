/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 5))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}

function inArray(arr) {
    return function (x) {
        let res = [];
        for (let value in arr) {
            if (x == value) { res.push(value) };
        }
        return res;
    }
}