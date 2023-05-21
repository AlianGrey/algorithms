//factorial number
const factorial = (n) => {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log('factorial = ', factorial(8))

//numbers fibonachi [1,1,2,3,5,8,13,21,33,54,87...]
const fibonachi = (n) => {
    if (n === 1 || n === 2) {
        return 1;
    }
    console.log(n)
    return fibonachi(n - 1) + fibonachi(n - 2); //fib(7)+fib(6) + fib(6)+fib(5)+fib(5)+fib(4)+fib(4)+fib(3)+fib(3)+fib(2)
}

console.log('fibonachi = ', fibonachi(8))