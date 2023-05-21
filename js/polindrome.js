let str = "А рра";//4445  //"А роза упала на лапу Азора"    //[1, 2, 3] //"Abba" //HEllo
const polindrome = str => {
    if (str === undefined || typeof str === 'number') {
        str = str + "";
    }
    if (str === "" || typeof str != 'string') { return false; }
    str = str.toLowerCase();

    str = str.replace(/\s/g, "") //delete white space from sentense

    return str === str.split("").reverse().join("");

    /*     let arr = str.split("");
        arr = arr.reverse();
        arr = arr.join("");
        console.log(str, arr)
        if (str === arr) { return true; }
        else { return false; } */
}
console.log(polindrome(str));

//tests
if (str = "Hello" === true) {
    throw new Error("Function doesn't work correctly!");
}
if (str = "Abba" === false) {
    throw new Error("Function doesn't work correctly!");
}
if (str = "" === true) {
    throw new Error("Function doesn't work correctly!");
}
if (str = [1, 2, 3] === true) {
    throw new Error("Function doesn't work correctly!");
}
if (str = "А роза упала на лапу Азора" === false) {
    throw new Error("Function doesn't work correctly!");
}


console.log("All tests passed ")