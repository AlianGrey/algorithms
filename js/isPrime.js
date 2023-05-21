//check num is prime or not
let num = 5;

function isPrime(num) {
    for (let k = 2, max = Math.sqrt(num); k <= max; k++) {
        if (!(num % k)) {
            return false;
        }
    }
    if ((num > 1) && (typeof num == "number") && !(num % 1) && !(num % num)) {
        return true;
    }
    return false;
}
console.log(num, isPrime(num));
console.log('1', isPrime(1));
console.log('2', isPrime(2));
console.log('3', isPrime(3));
console.log('4', isPrime(4));
console.log('5', isPrime(5));
console.log('0.5', isPrime(0.5));
console.log('dg', isPrime("dg"));
console.log('101', isPrime(101));