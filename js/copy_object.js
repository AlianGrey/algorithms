let obj = { a: 1, b: 2, c: 3 }

//option one through for in
function copyObject(obj) {
    let clone = {}
    for (let key in obj) {
        clone[key] = obj[key];
    }
    clone.b = 5;
    return clone;
}
console.log('clone = ', copyObject(obj), ';  obj = ', obj);
console.log('clone = ', copyObject(obj.b), ';  obj = ', obj.b);

//option two using assign
function copyObject2(obj) {
    let clone = {}
    let objName = { name: 'Vasya' }
    let dopObj = { year: 35, profession: 'developer' }

    clone = Object.assign({}, objName, obj, dopObj) //copy averything from second position in first object
    //  Object.assign(clone, obj)
    return clone;
}
console.log('clone = ', copyObject2(obj))

//option three throught json parser

//deep clone needs if obj contains not only primitives value 
var objects = [{ 'a': 1 }, { 'b': 2 }];

var deep = _.cloneDeep(objects);  //from lodash library
console.log(deep[0] === objects[0]);