let count = 3;
let res = [];
let j = 0;
function genBrackets(count, str = "", left = 0, right = 0) {

    if ((left == count) && (right == count)) {
        res.push(str);
    }
    else {
        if (left < count) {
            genBrackets(count, str += '(', ++left, right)
        }
        if (right < count) {
            genBrackets(count, str += ')', left, ++right)
        }
    }
    if (j === count * 2) {
        return [...res];
    }
    j++;
}
console.log(genBrackets(count));