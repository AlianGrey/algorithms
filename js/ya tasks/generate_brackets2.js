let n = 2;
let res = [];
function genBrackets(n, index = 0, balance = 0) {
    if (index = 2 * n) {
        if (balance = 0) {
            return res;
        }
    }
    res[index] = '(';
    genBrackets(n, index + 1, balance + 1);
    if (balance == 0) {
        return res;
    }
    res[index] = ')';
    genBrackets(n, index + 1, balance - 1);
}
console.log(n)