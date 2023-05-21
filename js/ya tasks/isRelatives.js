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

