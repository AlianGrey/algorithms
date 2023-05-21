module.exports = function (mapString: string): number {
    const fs = require('fs')
    let fileContent = fs.readFileSync("sup_input.txt", "utf8");
    let obj = fileContent.toString().split("\n")



    return timeInSec; // Время в секундах, за которое все буквы вытекли
}