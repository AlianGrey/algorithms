let arr = ['jazz', 'Bluze']
arr.push('Rock and Roll') //add end

//let middleIndex = Math.floor(arr.length / 2); //middle elemet replace
//arr[middleIndex] = 'Classic'

arr[Math.floor(arr.length / 2)] = 'Classic'; //middle elemet replace shorter

firstDeletElement = arr.shift();  //delete begine

arr.unshift('Rap', 'Reggi') //add begine

console.log('length = ', arr.length)
console.log(arr)
console.log('first delete elemetn = ', firstDeletElement)