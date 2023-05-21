console.log('----------get---------------------')
let numbers = [1, 2, 3];

numbers = new Proxy(numbers, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            return 0;
        }
    }
});

console.log(numbers[1]);
console.log(numbers[123]);

console.log('----------------vocabulary-----------------')
let dictionary = {
    'hello': 'hola',
    'bye': 'odios'
}
dictionary = new Proxy(dictionary, {
    get(target, phrase) {
        if (phrase in target) {
            return target[phrase];
        } else {
            return phrase;
        }
    }
});

console.log(dictionary['hello']);
console.log(dictionary['good']);

console.log('---------------------set number-----------------');
let numbers1 = [];
numbers1 = new Proxy(numbers1, {
    set(target, prop, value) {
        if (typeof value == 'number') {
            target[prop] = value;
            return true;
        } else {
            return false;
        }
    }
});

numbers1.push(1);
numbers1.push(2);
console.log(numbers1.length);
//numbers1.push('any string');  return typeerror

console.log('-------------Property exclusion-----------')
let user = {
    name: 'John',
    age: 30,
    _password: '****'
};

user = new Proxy(user, {
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }
});

for (let key in user) console.log(key);
console.log(Object.keys(user));
console.log(Object.values(user));


console.log('----------getOwnPropertyDescriptor----------------')
let user1 = {};

user1 = new Proxy(user1, {
    ownKeys(target) {
        return ['a', 'b', 'c'];
    },
    getOwnPropertyDescriptor(target, prop) {
        return {
            enumerable: true,
            configurable: true
        };
    }
});

console.log(Object.keys(user1));

console.log('-----------hidden properties---------------')
let user2 = {
    name: 'John',
    _password: 'secret'
};

user2 = new Proxy(user2, {
    get(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error('not allowd')
        } else {
            let value = target.prop;
            return (typeof value == 'functon') ? value.bind(target) : value;
        }
    },
    set(target, prop, val) {
        if (prop.startsWith('_')) {
            throw new Error('capacity is not edit');
        } else {
            target.prop = val;
            return true;
        }
    },
    deleteProperty(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error('this capacity cant delete');
        } else {
            delete target.prop;
            return true;
        }
    },
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }

});
try { console.log(user2._password); }
catch (e) { console.log(e.message); }

try { user2._password = '123'; }
catch (e) { console.log(e.message); }

try { delete user2._password; }
catch (e) { console.log(e.message); }

for (let key in user2) { console.log(key); }

console.log('---------range membership--------')
let range = {
    start: 1,
    end: 10
}

range = new Proxy(range, {
    has(target, prop) {
        return prop >= target.start && prop <= target.end
    }
});

console.log(10 in range);
console.log(50 in range);