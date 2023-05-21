let company = { // тот же самый объект, сжатый для краткости
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

function sumSalary(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev + current.salary, 0); //if this is easy array we summary
    }
    else { //if this is difficult object we split it on sub deb arrays
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalary(subdep);
        }
        return sum;
    }

}

console.log(sumSalary(company))