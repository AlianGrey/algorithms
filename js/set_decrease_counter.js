function makeCounter() {
    let count = 0;
    function counter() {
        return ++count;
    }
    counter.set = (value) => count = value;
    counter.decrease = () => --count;
    return counter;
}

let counter = makeCounter();
console.log("-----------increase-----------------")
console.log(counter()); //0
console.log(counter()); //1
console.log(counter()); //2
console.log("----------------set-----------------")
console.log(counter.set(5));  //5
console.log("-----------decrease-----------------")
console.log(counter.decrease()); //4
console.log(counter.decrease()); //3