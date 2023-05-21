console.log("---------------correct code json parse---------------");
let json = '{"name": "Jon", "age": 22}'
let user = JSON.parse(json);
console.log('name = ', user.name, 'age =', user.age)

console.log("---------------not correct code json catch runing---------------");
//try catch use
let json1 = '{"not correct json"}'
try {
    let user1 = JSON.parse(json1);
    console.log(user1.name);
}
catch (err) {
    console.log("catch runing")
}

console.log("---------------err capacity of try---------------");
//err capacity of try
try {
    lalala;
    console.log("not runing this block")
}
catch (e) {
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack)
}
finally {
    console.log("all time runing block")
}

console.log("---------------not correct but not runin catch---------------");
//not correct but not runin catch
let json2 = '{"name": "Jon"}'
try {
    let user2 = JSON.parse(json2);
    console.log(user2.age)
}
catch (e) {
    console.log("dont work catch")
    //console.log(e.name, e.message)
}

console.log("--------------using throw constraction which bring message how own js----------------");
let json3 = '{"name": "Jon"}'
try {
    let user3 = JSON.parse(json3);
    if (!user3.age) {
        throw SyntaxError("data is not full, not enough capacity: age");
    }
    console.log(user3.age);
}
catch (e) {
    console.log("JSON Error : " + e.message);
}


console.log("--------------using function----------------");
function readData() {
    let json = '{ "age": 30 }';

    try {
        // ...
        blabla(); // ошибка!
    } catch (e) {
        // ...
        if (e.name != 'SyntaxError') {
            throw e; // проброс исключения (не знаю как это обработать)
        }
    }
}

try {
    readData();
} catch (e) {
    console.log("Внешний catch поймал: " + e); // поймал!
}

