//stones and jewelry   
console.log("--------------------first version use for--------------------------")
//first version use for
let j = "ab"
let s = "aabbccd"   //return 4 (aabb)
function interseption(a, b) {
    let arr1 = a.split("");
    let arr2 = b.split("");
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                count++;
            }
        }
    }
    return count;
}
console.log("Count interseption = ", interseption(j, s));

console.log("------------------second version use filter------------------------")
//second version use filter
function interseption2(a, b) {
    let arr1 = a.split("");
    let arr2 = b.split("");
    let count = 0;
    arr1.forEach(elem1 => {
        let res = arr2.filter(elem2 => elem1 === elem2)
        count += res.length;
    });
    return count;
}
console.log("Count interseption = ", interseption2(j, s));