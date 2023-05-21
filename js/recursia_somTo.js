let number = 100;
//use for
function sumTo(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += num - i;
    }
    return sum;
}

//use recursion
function sumToRec(num) {
    if (num == 1) return 1;
    return num + sumToRec(num - 1);
}

//use arithmetic progression sumTo(n) = n*(n+1)/2
function sumToProgr(num) {
    return num * (num + 1) / 2;

}

console.log(sumTo(number));
console.log(sumToRec(number));
console.log(sumToProgr(number))

/* P.S. Надо ли говорить, что решение по формуле работает быстрее всех? 
Это очевидно. Оно использует всего три операции для любого n, а цикл и рекурсия 
требуют как минимум n операций сложения.

Вариант с циклом – второй по скорости. Он быстрее рекурсии, так как операций 
сложения столько же, но нет дополнительных вычислительных затрат на организацию 
вложенных вызовов. Поэтому рекурсия в данном случае работает медленнее всех. */