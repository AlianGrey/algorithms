console.log("--------------function constructor-------------------------------")
function Counter() {
    let count = 0;
    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}
let counter = new Counter();
console.log("up = ", counter.up());
console.log("up = ", counter.up());
console.log("down = ", counter.down());

console.log("--------------it's the same only through object-------------------------------")
//it's the same only through object
let count1 = 0;
let counter1 = {
    up: function () { return ++count1; },
    down: function () { return --count1; }
}
console.log("up = ", counter1.up())
console.log("up = ", counter1.up())
console.log("down = ", counter1.down())


console.log("---------------------------------------------")
function Constructor(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new Constructor("Dan");
console.log("name = ", user.name, ";   is admin = ", user.isAdmin)


console.log("---------------------------------------------")
function User(name) {
    this.name = name;
    this.sayHi = function () {
        console.log("Say hi  " + this.name)
    };
}
let vasya = new User("Ivan");
vasya.sayHi();

/*the same in object
let vasya = {
    name: "Ivan",
    sayHi: function(){}
} 
 */