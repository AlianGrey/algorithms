//nedd to sort by different field
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
//standart variant
// по имени (Ann, John, Pete)
console.log(users.sort((a, b) => a.name > b.name ? 1 : -1));
// по возрасту (Pete, Ann, John)
console.log(users.sort((a, b) => a.age > b.age ? 1 : -1))

//instead this doing the function byFiled
function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}
console.log("-----------by name------------------")
users.sort(byField('name'));
users.forEach(user => console.log(user.name)); // Ann, John, Pete
console.log("-----------by age------------------")
users.sort(byField('age'));
users.forEach(user => console.log(user.name, user.age)); // Pete, Ann, John