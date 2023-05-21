function calc(first, ...rest) {
    let oper = [];
    let arg = [];
    for (let i = 0; i < rest.length; i++) {
        if (i % 2) {
            arg.push(Number(rest[i]))
        }
        else {
            oper.push(rest[i]);
        }
    }
    arg.unshift(Number(first))


    let res = arg[0];
    for (let j = 0; j < oper.length; j++) {
        res = calcTwoNumber(res, arg[j + 1], oper[j]);
    }

    function calcTwoNumber(x, y, ope) {
        var res;
        if (ope == '+') {
            res = x + y;
        }
        else if (ope == '-') {
            res = x - y;
        }
        else if (ope == '/') {
            res = x / y;
        }
        else if (ope == '*') {
            res = x * y;
        }
        else {
            res = 0;
        }
        return res;
    }
    return String(res);
}
module.exports = { calc };

