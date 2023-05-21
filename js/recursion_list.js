let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

//use for 
function printList(list) {
    let tmp = list
    while (tmp) {
        console.log(tmp.value)
        tmp = tmp.next
    }
}
console.log(printList(list));

//use recursion
function printList2(list) {
    console.log(list.value)
    if (list.next) {
        printList2(list.next)
    }
}
console.log(printList2(list))