//n! = n * (n - 1) * (n - 2) * ...*1
/* 1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120 */

function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}


//use ternarniy operator
function factorialTer(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;   //or   return n ? n * factorial(n - 1) : 1;
}


console.log(factorialTer(5))