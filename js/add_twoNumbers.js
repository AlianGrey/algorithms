/* sum(a)(b) or sum(a,b)*/
const add = (a, b) => {
    if (b !== undefined) { return a + b; }
    return (c) => a + c;
}
console.log(add(2, 5));
console.log(add(2)(5));

console.log("-------------------------------------------")
/* sum(a)(b) */
function sum(a, b) {
    if (b !== undefined) { return a + b; }
    return function (c) {
        return a + c;
    }
}
console.log(sum(2, 3));
console.log(sum(2)(3));