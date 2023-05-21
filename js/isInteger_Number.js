function isInteger(num) {
    //return (num % 1) === 0  //or this method
    return (num ^ 0) === num; //побитовое исключающее или

}

console.log(isInteger(1)); // true       //00000001 ^ 00000000 = 00000001 => 1=1
console.log(isInteger(1.5)); // false    //00000001.1000 ^ 00000000.0000 = 00000001.1000 => 1.5=1.5
console.log(isInteger(-0.5)); // false   //00000000.1000 ^ 00000000.0000 = 00000000.1000 => 0=-0.5