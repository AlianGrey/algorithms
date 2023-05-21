console.log("-------------use a func to call itself  ------------------------")
let sayHi = function func(who) {
    if (who) {
        return console.log("Hello ", who);
    }
    else {
        return func("name not defined"); //uses a func to call itself  
    }
}
sayHi("name is defined"); //Hello  Peter
sayHi();  //Hellow  Guest
//func(); //func is not defined because the function name is not defined outside the function

console.log("--------------another variant of call function use variable name---------------")
let sayHi2 = function func(who) {
    if (who) { return console.log("Hello ", who) }
    else {
        return func("Guest");   //return sayHi2("Guest"); //sayHi2 is not a function, it's equal null
    }
}
let welcome = sayHi2;
welcome("variable is still defined");
sayHi2 = null;
welcome(); //sayHi2 is not a function, it's equal null
