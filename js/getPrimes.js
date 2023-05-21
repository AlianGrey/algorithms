//return all prime numbers from num
//first variant O(n^2)
let num = 120;
console.log('--------------------Variant first with 2 functions--------------------------')
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

function getPrimes(num) {
    let res = [];
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            res.push(i);
        }
    }
    return res;
}
console.log(getPrimes(num));


console.log('--------------------Variant two sieve of eratosthenes--------------------------')
//varian two algorithm Эратосфена O(n*log(n))
function getPrimes1(num) {
    let sieve = [];
    let prime = [];
    for (let i = 2; i < num; i++) {
        if (!sieve[i]) {
            prime.push(i);
        }
        for (let j = i * i; j <= num; j += i) {
            sieve[j] = true;
        }
    }
    return prime;
}
console.log(getPrimes1(num));