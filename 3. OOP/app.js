function carInfo(x) {
    class Car {
        brand;
        model;
        horsePower;
        get data() {
            return `The car is: ${this.brand} ${this.model} - ${this.horsePower} HP.`;
        }
        set newBrand(x) {
            this.brand = x;
        }
        set newModel(x) {
            this.model = x;
        }
        set newHorsePower(x) {
            this.horsePower = x;
        }
    }
    const [brand, model, hp] = x.split(' ');
    const car = new Car();
    car.newBrand = brand;
    car.newModel = model;
    car.newHorsePower = Number(hp);
    return car.data;
}
console.log(carInfo('Chevrolet Impala 390'));
console.log('-----------------------------------------');
function opinionPoll(x) {
    class Person {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        getData() {
            return `${this.name} is ${this.age} years old.`;
        }
    }
    const [name, age] = x.split(' ');
    const person = new Person(name, Number(age));
    return person.getData();
}
console.log(opinionPoll('Peter 12'));
console.log('-----------------------------------------');
class Animal {
    eat() {
        return 'Eating';
    }
}
class Dog extends Animal {
    bark() {
        return 'Barking';
    }
}
class Cat extends Animal {
    meow() {
        return 'Meowing';
    }
}
function companyRoster(x) {
    class Employee {
        name;
        salary;
        position;
        department;
        email;
        age;
        constructor(name, salary, position, department, email, age) {
            this.name = name;
            this.salary = salary;
            this.position = position;
            this.department = department;
            this.email = email || 'n/a';
            this.age = age || -1;
        }
    }
    class Department {
        name;
        employees = [];
        constructor(name) {
            this.name = name;
        }
        addEmployee(employee) {
            this.employees.push(employee);
        }
        avgSalary() {
            let avgSalary = 0;
            for (const el of this.employees) {
                avgSalary += el.salary;
            }
            avgSalary = avgSalary / this.employees.length;
            return avgSalary;
        }
    }
    const data = x.split('\n');
    let departments = {};
    for (const el of data) {
        const [name, salary, position, department, email, age] = el.split(' ');
        const employee = new Employee(name, Number(salary), position, department, email, Number(age));
        if (departments.hasOwnProperty(department)) {
            departments[department].addEmployee(employee);
        }
        else {
            departments[department] = new Department(department);
            departments[department].addEmployee(employee);
        }
    }
    let highestPaidDepartment = '';
    let highestAvgSalary = 0;
    for (const [key, value] of Object.entries(departments)) {
        if (value.avgSalary() > highestAvgSalary) {
            highestAvgSalary = value.avgSalary();
            highestPaidDepartment = key;
        }
    }
    departments[highestPaidDepartment].employees = departments[highestPaidDepartment].employees.sort((a, b) => b.salary - a.salary);
    let string = `Highest Average Salary: ${highestPaidDepartment}\n`;
    const highestPaidEmployees = departments[highestPaidDepartment].employees;
    for (const el of highestPaidEmployees) {
        string += `${el.name} ${el.salary} ${el.email} ${el.age}\n`;
    }
    return string.trim();
}
console.log(companyRoster(`Silver 496.37 Temp Coding silver@yahoo.com
Sam 600.13 Manager Sales
John 609.99 Manager Sales john@abv.bg 44
Venci 0.02 Director BeerDrinking beer@beer.br 23
Andre 700.00 Director Coding
Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey`));
function pokemonTrainer(x) {
    class Trainer {
        name;
        numberOfBadges = 0;
        pokemons = [];
        constructor(name) {
            this.name = name;
        }
        addPokemon(pokemon) {
            this.pokemons.push(pokemon);
        }
        checkForElement(element) {
            let isElement = false;
            for (const el of this.pokemons) {
                if (el.element === element) {
                    return isElement = true;
                }
            }
            return isElement;
        }
        addBadge() {
            this.numberOfBadges++;
        }
        damagePokemon() {
            for (let i = 0; i < this.pokemons.length; i++) {
                this.pokemons[i].health -= 10;
                if (this.pokemons[i].health <= 0) {
                    this.pokemons.splice(i, 1);
                }
            }
        }
    }
    class Pokemon {
        name;
        element;
        health;
        constructor(name, element, health) {
            this.name = name;
            this.element = element;
            this.health = health;
        }
    }
    const arr = x.split('\n');
    let i = 0;
    const trainers = {};
    while (arr[i] !== 'Tournament') {
        const [trainerName, pokemonName, pokemonElement, pokemonHealth] = arr[i].split(' ');
        const pokemon = new Pokemon(pokemonName, pokemonElement, Number(pokemonHealth));
        if (trainers.hasOwnProperty(trainerName)) {
            trainers[trainerName].addPokemon(pokemon);
        }
        else {
            const trainer = new Trainer(trainerName);
            trainer.addPokemon(pokemon);
            trainers[trainerName] = trainer;
        }
        i++;
    }
    i++;
    while (arr[i] !== 'End') {
        const command = arr[i];
        for (const value of Object.values(trainers)) {
            if (value.checkForElement(command)) {
                value.addBadge();
            }
            else {
                value.damagePokemon();
            }
        }
        i++;
    }
    const outputArr = Object.values(trainers).sort((a, b) => b.numberOfBadges - a.numberOfBadges);
    let outputStr = '';
    for (const el of outputArr) {
        outputStr += `${el.name} ${el.numberOfBadges} ${el.pokemons.length}\n`;
    }
    return outputStr.trim();
}
console.log(pokemonTrainer(`Peter Charizard Fire 100
George Squirtle Water 38
Peter Pikachu Electricity 10
Tournament
Fire
Electricity
End`));
//# sourceMappingURL=app.js.map