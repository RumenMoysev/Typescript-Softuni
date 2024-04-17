/// <reference path="namespaces.ts"/>
class Person {
    name;
    age;
    constructor(x, name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    introduction() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
    sayGoodbye(name) {
        return `Dear ${name}, it was a pleasure meeting you!`;
    }
}
let p = new Person(false, 'Ivan Ivanov', 25);
console.log(p.introduction());
console.log(p.sayGoodbye('Petar Petrov'));
class Courier {
    placesToVisit;
    constructor(x) {
        this.placesToVisit = x;
    }
    newCustomer(customerName, visited) {
        let hasVisited = false;
        if (visited === true || visited === false) {
            hasVisited = visited;
        }
        let includes = false;
        for (const el of this.placesToVisit) {
            if (el.customerName === customerName) {
                includes = true;
                return `${customerName} is already a customer of yours!`;
            }
        }
        if (includes === false) {
            this.placesToVisit.push({ customerName, visited: hasVisited });
            return `${customerName} just became your client.`;
        }
    }
    visitCustomer(customerName) {
        let includes = false;
        for (const el of this.placesToVisit) {
            if (el.customerName === customerName) {
                includes = true;
                el.visited = true;
            }
        }
        if (includes === false) {
            return `${customerName} is not your customer.`;
        }
    }
    showCustomers() {
        let string = '';
        for (const el of this.placesToVisit) {
            string += `\n${el.customerName} -> ${el.visited}`;
        }
        return string.trim();
    }
}
let courier = new Courier([{ customerName: 'DHL', visited: false }]);
courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');
courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');
console.log(courier.showCustomers());
//# sourceMappingURL=app.js.map