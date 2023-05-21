let num = 112723332445556

function luckyNum(num) {
    num = [...String(num)];
    let res = {};
    for (let i = 0; i < num.length; i++) {
        if (res[num[i]]) {
            res[num[i]]++;
        }
        else {
            res[num[i]] = 1;
        }
    }
    console.log(res)
    let luckyNum;
    for (let key in res) {
        if (+key === res[key] {
            return luckyNum = +key;
        }
    }
}
console.log(luckyNum(num));