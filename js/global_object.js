//global object globalThis or windows
console.log("Привет");
// это то же самое, что и
globalThis.console.log("Привет");

console.log("--------------------var have a global area of visibility ----------------------------")
var gVar = 5;
console.log(globalThis.gVar);
console.log(gVar);

console.log("-------------------global object-----------------------------")
// сделать информацию о текущем пользователе глобальной, для предоставления доступа всем скриптам
globalThis.currentUser = {
    name: "John"
};

// где угодно в коде
console.log(currentUser.name); // John

// или, если у нас есть локальная переменная с именем "currentUser",
// получим её из window явно (безопасно!)
console.log(globalThis.currentUser.name); // John

console.log("--------------------we can check our browser support ----------------------------")

if (globalThis.Promise) { console.log("Your browser is new") }