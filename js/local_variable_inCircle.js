function makeArmy() {
    let shooters = [];
    for (let i = 0; i < 10; i++) {  //need to be a local variable i in circle
        let shooter = function () { // функция shooter
            console.log(i); // должна выводить порядковый номер
        };
        shooters.push(shooter);
    }
    return shooters;
}
let army = makeArmy();
army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
console.log("---------------Variant with while wrong and in comment right----------------------------")
//we need add local variable i in circle
function makeArmy2() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        //need add let j = i;
        let shooter = function () {
            console.log(i) // need replace on console.log(j)
        }
        shooters.push(shooter);
        i++;
    }
    return shooters;

}
let army2 = makeArmy2();
army2[0]();
army2[5]();