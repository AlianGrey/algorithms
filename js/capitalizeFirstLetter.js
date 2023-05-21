//task two - capitalize First letter
//option 1
function capitalizeFirstLetter(str) {
    let arrFromStr = str.split('');
    // console.log(arrFromStr);
    arrFromStr[0] = arrFromStr[0].toUpperCase()
    //console.log(arrFromStr[0]);
    return arrFromStr.join('');
}
console.log(capitalizeFirstLetter("hello"))

//option 2
function capitalizeFirstLetter2(str) {
    return str = str[0].toUpperCase() + str.slice(1)
}
console.log(capitalizeFirstLetter2("hello"))

//option 3
function capitalizeFirstLetter3(str) {
    let temp = str[0].toUpperCase();
    //console.log(temp)
    return temp + str.slice(1); //cut off from the second character
}
console.log(capitalizeFirstLetter3("hello"))