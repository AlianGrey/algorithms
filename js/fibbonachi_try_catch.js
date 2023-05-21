console.log("--------------fibbonachi----------------");
let num = +prompt('Enter integer number', 35);
let diff, result;
function fib(n) {
    if ((n < 0) || (Math.trunc(n) != n)) {
        throw new Error('We need only integer number')
    }
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
let start = Date.now();

try {
    result = fib(num);
}
catch (e) {
    result = 0;
}
finally {
    diff = Date.now() - start;
}
//alert(result || 'Error happen');
//alert(`Execution took: ${diff} sec`);
console.log(result || 'Error happen');
console.log(`Execution took: ${diff} sec`);

document.querySelector('.out').innnerHTML = "";
document.querySelector('.out').innerHTML = `Fibbonachi ${num} <br> Result = ${result} <br> Execution took: ${diff} sec`;