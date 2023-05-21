let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
for (let i = 0; i < arr.length; i++) {
    console.log("row", i, arr[i]);
}

for (let k = 0; k < arr.length; k++) {
    for (let j = 0; j < arr[k].length; j++) {
        console.log(arr[k][j]);
    }
    console.log("next row")
}

let out = '';
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > 3) {
            out += arr[i][j] + ' ';
        }
    }
    out += '<br>';
}
document.querySelector('.out').innerHTML = out;
console.log(out)

//move unit on press button
let d = [1, 0, 0, 0, 0];
document.querySelector('.out2').innerHTML = d;
let k = 0;
document.querySelector('button').onclick = () => {
    if (k + 1 < 5) {
        d[k] = 0;
        d[k + 1] = 1;
        k++;

    }

    document.querySelector('.out2').innerHTML = d;
}

