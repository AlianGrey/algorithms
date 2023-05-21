//removing duplicates № 3
console.log("---------first varian with set--------------")
//first variant with set
let arr = [2, 4, 4, 8, 8, 8];
function remDuplicates(arr) {
    let mySet = new Set(arr);
    return [...mySet];
}
console.log(remDuplicates(arr));

console.log("---------second varian with includes--------------")
//second varian with includes let arr = [2, 4, 4, 8, 8, 8];
function remDuplicates2(arr) {
    let res = [];
    for (el of arr) {
        if (!res.includes(el)) {
            res.push(el);
        }
    }
    return res;
}
console.log(remDuplicates2(arr));