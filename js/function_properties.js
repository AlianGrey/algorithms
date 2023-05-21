console.log("--------------------Function in function to save values--------------------------")
function makeCounter() {
    let count = 0;
    // internal function need to save lexical environment to save value of variable count
    //without return function variable count always will be equal zero
    return function () {
        return count++; // есть доступ к внешней переменной "count"
    };
}

let counter = makeCounter();

console.log("First call:", counter()); // 0
console.log("Second call:", counter()); // 1
console.log("Third call:", counter()); // 2

console.log("--------------------Function as Object use--------------------------")

function makeCounter2() {
    counter2.count = 0;
    function counter2() {
        return counter2.count++;
    }
    return counter2;
}
let counter2 = makeCounter2();
console.log("First call:", counter2());
console.log("Second call:", counter2());
console.log("Third call:", counter2());