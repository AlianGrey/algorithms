let str1 = "friend";
let str2 = "fdenir";
//varian one
/* function chechAnagrams(str1, str2) {
    if (!str1 || !str2 || (typeof str1 !== "string") || (typeof str1 !== "string") || str1.length !== str2.length) { return false; }
    let arr1 = [...str1.toLocaleLowerCase()];
    let arr2 = [...str2.toLocaleLowerCase()];
    console.log(arr1, arr2);
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        res.push(arr2.filter(el => el === arr1[i]));
    }
    if (arr1.toString() === res.toString()) {
        return true;
    }
    else return false;
}
console.log(chechAnagrams(str1, str2));
console.log(chechAnagrams("bye", "hello")); */

//variant two
/* function toObj(str) {
    const obj = {};
    str = str.toLowerCase().replace(/[^\w]/g);
    console.log(str)
    for (let char of str) {
        obj[char] = obj[char] + 1 || 1;
    }
    return obj;
}

function anagram(a, b) {
    let obj1 = toObj(a);
    let obj2 = toObj(b);
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (let el in obj1) {
        if (obj1[el] !== obj2[el]) {
            return false;
        }
    }
    return true;
}
console.log(anagram(str1, str2)); */

//varian three oneliner
console.log([...str1.toLowerCase()].sort(), [...str2.toLowerCase()].sort())
let anagram2 = (a, b) => { if ([...a.toLowerCase()].sort().toString() === [...b.toLowerCase()].sort().toString()) { return true; } }
console.log(anagram2(str1, str2))