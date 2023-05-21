let count = 0;
let count2 = 0;

function pow(n, x) {
    count += 1;
    if (x == 1) {
        return n;
    }
    else {
        return n * pow(n, x - 1);
    }
}

function powFor(x, n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= x;
        count2 = count2 + 1;
    }
    return result;
}

console.log(count);
console.log('pow = ', pow(2, 3));
console.log(count2);
console.log('pow = ', powFor(2, 3));