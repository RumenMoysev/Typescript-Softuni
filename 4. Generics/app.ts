class Box<T> {
    input: T | undefined

    constructor(x: T) {
        this.input = x
    }

    toString(): string {
        return `${this.input} is of type ${typeof this.input}`
    }
}

const box1 = new Box(['test']);
const box2 = new Box(20);
const box3 = new Box('Hello');

console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());

console.log('--------------------------------')

class Compare<T> {
    array: T[]

    constructor(input: T[]) {
        this.array = input
    }

    compare(x: any): number {
        let times: number = 0;

        this.array.forEach(xElem => {
            if(xElem === x) {
                times++
            }
        })

        return times
    }
}

const c = new Compare(['a', 'b', 'ab', 'abc', 'cba', 'b']);

console.log(c.compare('b'));

console.log('--------------------------------')

interface Dealership<T> {
    dealershipName: T,
    soldCars: number
}

interface Actions<T> {
    sellCar(dealerId: T, model:T): void
}

class CarDealership<T> implements Dealership<T>, Actions<T> {
    dealershipName: T;
    soldCars: number = 0;
    modelsSold: object = {}

    constructor(name: T) {
        this.dealershipName = name
    }

    sellCar(dealerId: T, model: T): void {
        this.modelsSold[dealerId as string] = model
        this.soldCars++
    }

    showDetails(): string {
        let str: string = `${this.dealershipName}:`

        const arr = Object.entries(this.modelsSold)

        for(const [key, value] of arr) {
            str += `\n${key} sold ${value}`
        }

        return str.trim()
    }
}

const dealership = new CarDealership('SilverStar');

dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');

console.log(dealership.showDetails());

console.log('--------------------------------')

abstract class CreateAccount<T, Z> {
    bankName: T;
    bankId: Z

    constructor(name: T, id: Z) {
        this.bankName = name;
        this.bankId = id
    }
};

class PersonalAccount<T, Z> extends CreateAccount<T,Z> {
    readonly ownerName: string;
    money: number = 0;
    recentTransactions: object = {}

    constructor(bankName: T, bankID: Z, name: string) {
        super(bankName, bankID)
        this.ownerName = name
    }

    deposit(amount: number): void {
        this.money += amount
    }

    expense(amount: number, expenseType: string) {
        if(amount <= this.money) {
            if(this.recentTransactions.hasOwnProperty(expenseType)) {
                this.recentTransactions[expenseType] += amount
            } else {
                this.recentTransactions[expenseType] = amount
            }

            this.money -= amount
        } else {
            return `You can't make ${expenseType} transaction`
        }
    }

    showDetails(): string {
        let totalMoneySpent: number = 0
        
        for(const value of Object.values(this.recentTransactions)) {
            totalMoneySpent += value
        }

        return `Bank name: ${this.bankName}
Bank ID: ${this.bankId}
Owner name: ${this.ownerName}
Money: ${this.money}
Money spent: ${totalMoneySpent}`
    }
}

let account = new PersonalAccount('DSK', 101240, 'Ivan Ivanov');

account.deposit(1000);
account.deposit(1000);
account.expense(700, 'Buy new phone');
account.expense(400, 'Book a vacation');
account.expense(400, 'Book a vacation');
account.expense(100, 'Buy food');

console.log(account.showDetails());