const first = [1, 5, 2, 3, 4, 3, 5];
const second = [3, 4, 5, 6];

//first example through for
function intersection(a, b) {
    let int = new Set();
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j <= a.length; j++) {
            if (a[i] === b[j]) { int.add(a[i]) }
        }
    }
    return [...int];
}
console.log(intersection(first, second))

//first example through for
function intersection2(a, b) {
    for (let i = 0; i < a.length; i++) {
        b.filter(el => a[i] === el)
    }
}
console.log(intersection2(first, second))