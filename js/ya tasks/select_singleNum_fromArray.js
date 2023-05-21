//need select single number from array
console.log("---------------first variant with sort--------------------------")
//first variant
let arr = [1, 4, 5, 7, 9, 4, 7, 1, 9] //=> result: 5
function selectSingle(arr) {
    let temp = [...arr];
    temp.sort((a, b) => a > b ? 1 : -1);
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === temp[i + 1]) { temp[i].shift; temp[i + 1].shift; i++; }
        else { return temp[i] }
    }
    return temp;
}
console.log(selectSingle(arr)) //algorithm complexity = O (nlog n)

console.log("---------------second variant with 2 for--------------------------")
//second variant
function selectSingle2(arr) {
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
                break;
            }
        }
        if (!count) {
            return arr[i];
        }
    }
}
console.log(selectSingle2(arr)) //algorithm complexity = O (n^2)

console.log("---------------third variant with for and includes--------------------------")
//third variant
function selectSingle3(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr.includes(arr[i], i + 1)) {
            return arr[i];
        }
    }
}
console.log(selectSingle3(arr)) //algorithm complexity = O (n) with big memory

console.log("---------------four variant with xor--------------------------")
//four variant let arr = [1, 4, 5, 7, 9, 4, 7, 1, 9] 
function selectSingle4(arr) {
    let res = arr.reduce((acc, current) => acc ^ current);
    return res;
}
console.log(selectSingle4(arr)) //algorithm complexity = O (n) with small memory