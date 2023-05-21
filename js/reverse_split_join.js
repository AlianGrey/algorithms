let testStr = 'привет медвед! + как твои дела, да пока ничего, а у тебя как?';
let testSplit = ""; //, как ""
let arr = [12, 'any string', true, 'add string']
let joinSplit = ' - '

function splitString(str, split) {
    let result = str.split(split);
    return result;
}

function reverseString(str, split) { //split must be iqual ""
    let result = str.split(split).reverse().join(''); //join may be (), (''), (-) ....
    return result;
}

function joinString(arr, split) {
    let result = arr.join(split);
    return result;
}

console.log('input string = ', testStr);
console.log('spliter = ', testSplit);
console.log('length = ', reverseString(testStr, testSplit).length);
console.log('output string = ', reverseString(testStr, testSplit));

console.log('join result = ', joinString(arr, joinSplit));