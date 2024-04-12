const calculateRectangleArea = (a, b) => a * b;
console.log(calculateRectangleArea(5, 7));
console.log('-----------------------------------------');
function largestNumber(a, b, c) {
    return Math.max(a, b, c);
}
console.log(`The largest number is: ${largestNumber(5, -3, 16)}`);
console.log('-----------------------------------------');
function dayOfWeek(day) {
    switch (day) {
        case 'Monday': return 1;
        case 'Tuesday': return 2;
        case 'Wednesday': return 3;
        case 'Thursday': return 4;
        case 'Friday': return 5;
        case 'Saturday': return 6;
        case 'Sunday': return 7;
        default: return 'error';
    }
}
console.log(dayOfWeek('Wednesday'));
console.log('-----------------------------------------');
function mathOperations(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}
console.log(mathOperations(3, 4, '*'));
console.log('-----------------------------------------');
function evenPosition(array) {
    let arra = [];
    for (let i = 0; i < array.length; i += 2) {
        arra.push(array[i]);
    }
    return arra.join(' ');
}
console.log(evenPosition(['1', '2', '3', '4']));
console.log('-----------------------------------------');
function biggerHalf(x) {
    let arr = [];
    arr = x.sort((a, b) => b - a).slice(0, Math.ceil(x.length / 2));
    return arr;
}
console.log(biggerHalf([1, 2, 3, 4, 5]));
console.log('-----------------------------------------');
function cats(catArray) {
    class Cat {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }
    let arr = [];
    for (const el of catArray) {
        const [name, age] = el.split(' ');
        const cat = new Cat(name, Number(age));
        arr.push(cat.meow());
    }
    return arr.join('\n');
}
console.log(cats(['Mellow 2', 'Tom 5']));
console.log('-----------------------------------------');
function employees(x) {
    const arr = [];
    for (const el of x) {
        arr.push(`Name: ${el} -- Personal Number: ${el.length}`);
    }
    return arr.join('\n');
}
console.log(employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]));
console.log('-----------------------------------------');
function aggregateElems(x) {
    let sum = 0;
    let inversedSum = 0;
    let string = '';
    for (const el of x) {
        sum += el;
        inversedSum += 1 / el;
        string += el;
    }
    return `${sum}\n${inversedSum}\n${string}`;
}
console.log(aggregateElems([2, 4, 8, 16]));
