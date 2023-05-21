function sumInput() {
    let numbers = []
    while (true) {
        let value = prompt('Введите число', 0);
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value); // + edit str to number
    }
    let sum = 0;
    //for (let i = 0; numbers.length; i++) {sum += numbers[i]; }
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

alert('сумма =', sumInput)
