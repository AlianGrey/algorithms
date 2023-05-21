//chech age 2 variant
function checkAge(age) {
    return (age > 18) ? true : console.log("Вам родители разрешили?");
}
function checkAge2(age) {
    return (age > 18) || console.log("Вам родители разрешили?");
}

console.log("checkAge =", checkAge(19))
console.log("checkAge = ", checkAge2(18))

console.log("-----------------------------------------")


//min from 2 numbers
function selectMin(a, b) {
    // return Math.min(a, b);
    return (a < b) ? a : b;
}
console.log("selectMin = ", selectMin(9, 5))

console.log("-----------------------------------------")


//pow (x^n) => (x^3) =x*x*x
function pow(x = "null", n) {
    if ((x < 1) || !Number.isInteger(x)) { return null }
    let res = x;
    res = x ** n; //exponentiation operator
    /* for (let i = 1; i < n; i++) {
        res *= x;
    } */
    return res;
}
console.log("pow (x^n) = ", pow(2, 3))


console.log("-----------------------------------------")

//area of visibilty for function
//function declaration
let age = 12;
if (age < 18) {
    welcome();
    function welcome() {
        console.log("hello")
    }
    welcome();
}
else {
    function welcome() {
        console.log("good day")
    }
}
//welcome(); //function is not defined becose func is visibility only in block if{}

//function expression
age = 19;
//let welcome;
/* if (age < 18) {
    welcome = function () {
        console.log("hello")
    };
}
else {
    welcome = function () {
        console.log("good day")
    }; */
let welcome = (age < 18) ?
    function () { console.log("hello"); } :
    function () { console.log("good day"); };
welcome();

console.log("-----------------------------------------")
// функция-конструктор возвращает новый объект
function User(name) {
    // методом объекта становится вложенная функция
    this.sayHi = function () {
        console.log(name);
    };
}

let user = new User("John");
console.log(user)
user.sayHi(); // у кода метода "sayHi" есть доступ к внешней переменной "name"

console.log("-----------------------------------------");

//IIFE immediately-invoked function expressions
(function () {

    let message = "Hello";

    console.log("IIFE", message); // Hello

})();