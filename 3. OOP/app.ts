function carInfo(x: string): string {
    class Car {
        public brand: string;
        public model: string;
        public horsePower: number

        get data() {
            return `The car is: ${this.brand} ${this.model} - ${this.horsePower} HP.`
        }

        set newBrand(x: string) {
            this.brand = x
        }

        set newModel(x: string) {
            this.model = x
        }

        set newHorsePower(x: number) {
            this.horsePower = x
        }
    }

    const [brand, model, hp] = x.split(' ')

    const car = new Car()
    car.newBrand = brand
    car.newModel = model
    car.newHorsePower = Number(hp)

    return car.data
}

console.log(carInfo('Chevrolet Impala 390'))
console.log('-----------------------------------------');

function opinionPoll(x: string): string {
    interface PersonType {
        name: string,
        age: number,
        getData: Function
    }

    class Person implements PersonType {
        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        getData() {
            return `${this.name} is ${this.age} years old.`
        }
    }

    const [name, age]: string[] = x.split(' ')
    const person = new Person(name, Number(age))

    return person.getData()
}

console.log(opinionPoll('Peter 12'));
console.log('-----------------------------------------');

class Animal {
    eat(): string {
        return 'Eating'
    }
}

class Dog extends Animal {
    bark(): string {
        return 'Barking'
    }
}

class Cat extends Animal {
    meow(): string {
        return 'Meowing'
    }
}

function companyRoster(x: string): string {
    type DepartmentsObj = {
        [key: string]: Department
    }

    class Employee {
        name: string
        salary: number
        position: string
        department: string
        email: string
        age: number

        constructor (name: string, salary: number, position: string, department: string, email?: string, age?: number) {
            this.name = name
            this.salary = salary
            this.position = position
            this.department = department
            this.email = email || 'n/a'
            this.age = age || -1
        }
    }

    class Department {
        name: string
        employees: Employee[] = []

        constructor(name: string) {
            this.name = name
        }

        addEmployee(employee: Employee) {
            this.employees.push(employee)
        }

        avgSalary() {
            let avgSalary: number = 0

            for(const el of this.employees) {
                avgSalary += el.salary
            }

            avgSalary = avgSalary / this.employees.length

            return avgSalary
        }
    }

    const data: string[] = x.split('\n')
    let departments: DepartmentsObj = {}

    for(const el of data) {
        const [name, salary, position, department, email, age]: string[] = el.split(' ')

        const employee = new Employee(name, Number(salary), position, department, email, Number(age))

        if(departments.hasOwnProperty(department)) {
            departments[department].addEmployee(employee)
        } else {
            departments[department] = new Department(department)
            departments[department].addEmployee(employee)
        }
    }

    let highestPaidDepartment: string = ''
    let highestAvgSalary: number = 0

    for(const [key, value] of Object.entries(departments)) {
        if(value.avgSalary() > highestAvgSalary) {
            highestAvgSalary = value.avgSalary()
            highestPaidDepartment = key
        }
    }

    departments[highestPaidDepartment].employees = departments[highestPaidDepartment].employees.sort((a:Employee, b: Employee) => b.salary - a.salary)

    let string: string = `Highest Average Salary: ${highestPaidDepartment}\n`
    const highestPaidEmployees: Employee[] = departments[highestPaidDepartment].employees

    for(const el of highestPaidEmployees) {
        string += `${el.name} ${el.salary} ${el.email} ${el.age}\n`
    }

    return string.trim()
}

console.log(companyRoster(`Silver 496.37 Temp Coding silver@yahoo.com
Sam 600.13 Manager Sales
John 609.99 Manager Sales john@abv.bg 44
Venci 0.02 Director BeerDrinking beer@beer.br 23
Andre 700.00 Director Coding
Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey`))

function pokemonTrainer(x: string): string {
    type TrainersObj = {
        [key: string]: Trainer
    }

    class Trainer {
        name: string;
        numberOfBadges: number = 0;
        pokemons: Pokemon[] = [];

        constructor(name: string) {
            this.name = name;
        }

        addPokemon(pokemon: Pokemon) {
            this.pokemons.push(pokemon)
        }

        checkForElement(element: string) {
            let isElement: boolean = false

            for(const el of this.pokemons) {
                if(el.element === element) {
                    return isElement = true
                }
            }

            return isElement
        }

        addBadge() {
            this.numberOfBadges++
        }

        damagePokemon() {
            for(let i = 0; i < this.pokemons.length; i++) {
                this.pokemons[i].health -= 10
                if(this.pokemons[i].health <= 0) {
                    this.pokemons.splice(i, 1)
                }
            }
        }
    }

    class Pokemon {
        name: string;
        element: string;
        health: number;

        constructor(name: string, element: string, health: number) {
            this.name = name
            this.element = element
            this.health = health
        }
    }

    const arr: string[] = x.split('\n')

    let i: number = 0

    const trainers: TrainersObj = {}

    while(arr[i] !== 'Tournament') {
        const [trainerName, pokemonName, pokemonElement, pokemonHealth] = arr[i].split(' ')

        const pokemon = new Pokemon(pokemonName, pokemonElement, Number(pokemonHealth))

        if(trainers.hasOwnProperty(trainerName)) {
            trainers[trainerName].addPokemon(pokemon)

        } else {
            const trainer = new Trainer(trainerName)

            trainer.addPokemon(pokemon)
            trainers[trainerName] = trainer
        }

        i++
    }

    i++

    while(arr[i] !== 'End') {
        const command: string = arr[i]

        for(const value of Object.values(trainers)) {
            if(value.checkForElement(command)) {
                value.addBadge()
            } else {
                value.damagePokemon()
            }
        }

        i++
    }

    const outputArr: Trainer[] = Object.values(trainers).sort((a,b) => b.numberOfBadges - a.numberOfBadges)

    let outputStr: string = ''

    for(const el of outputArr) {
        outputStr += `${el.name} ${el.numberOfBadges} ${el.pokemons.length}\n`
    }

    return outputStr.trim()
}

console.log(pokemonTrainer(`Sam Blastoise Water 18
Narry Pikachu Electricity 22
John Kadabra Psychic 90
Tournament
Fire
Electricity
Fire
End`))