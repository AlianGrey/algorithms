function isRelativies(genA, genB, level) {
    if ((genA.length == 1) && (genB.length == 1)) {
        if ((genA !== genB) || (level == 1)) { return false; }
    }
    if (genA == genB) {
        return true;
    }
    if ((genA.length == 2) && (genB.length == 2)) {
        if (level < 1) {
            return false;
        }
        return true;
    }
    let arr1 = [...genA];
    let arr2 = [...genB];
    let temp = [];
    let pos = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = pos; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                temp.push(arr2[j]);
                pos = j + 1;
                break;
            }
        }
    }
    let str1 = genA;
    str1 = str1.replace(temp.join(''), '');
    if (str1.length <= level) {
        return true;
    }
    return false;
}
exports.isRelativies = isRelativies;

console.log('1.1 ', isRelativies('AT', 'TA', 1)); // true
console.log('1.2 ', isRelativies('AT', 'TA', 0)); // false
console.log('1.3 ', isRelativies('AT', 'TA', 5)); // true

console.log('2.1 ', isRelativies('ATGGC', 'TG', 3)); // true
console.log('2.2 ', isRelativies('ATGGC', 'TG', 2)); // false
console.log('2.3 ', isRelativies('ATGGC', 'TG', 10)); // true

console.log('3.1 ', isRelativies('AAA', 'AAA', 0)); // true
console.log('3.2 ', isRelativies('AAA', 'AAA', 5)); // true
console.log('3.3 ', isRelativies('AAA', 'AAA', 55)); // true

console.log('4.1 ', isRelativies('ATTTGCGC', 'CGCGATTT', 4)); // true
console.log('4.2 ', isRelativies('ATTTGCGC', 'CGCGATTT', 2)); // false

console.log('5 ', isRelativies('G', 'T', 1)); // false
console.log('5 ', isRelativies('G', 'G', 1)); // false

