let num = "123456789 f";

function sum(num) {
    num = num.split(" ");
    let res = 0;
    console.log()
    num.forEach(element => {
        if (typeof element != "number") { return console.log("It's not a number"); breik; }
        res = res + Number(element)
    });
    return res;
}
console.log(sum(num));
