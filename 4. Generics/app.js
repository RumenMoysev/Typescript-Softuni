class Box {
    input;
    constructor(x) {
        this.input = x;
    }
    toString() {
        return `${this.input} is of type ${typeof this.input}`;
    }
}
const box1 = new Box(['test']);
const box2 = new Box(20);
const box3 = new Box('Hello');
console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());
console.log('--------------------------------');
class Compare {
    array;
    constructor(input) {
        this.array = input;
    }
    compare(x) {
        let times = 0;
        this.array.forEach(xElem => {
            if (xElem === x) {
                times++;
            }
        });
        return times;
    }
}
const c = new Compare(['a', 'b', 'ab', 'abc', 'cba', 'b']);
console.log(c.compare('b'));
console.log('--------------------------------');
class CarDealership {
    dealershipName;
    soldCars = 0;
    modelsSold = {};
    constructor(name) {
        this.dealershipName = name;
    }
    sellCar(dealerId, model) {
        this.modelsSold[dealerId] = model;
        this.soldCars++;
    }
    showDetails() {
        let str = `${this.dealershipName}:`;
        const arr = Object.entries(this.modelsSold);
        for (const [key, value] of arr) {
            str += `\n${key} sold ${value}`;
        }
        return str.trim();
    }
}
const dealership = new CarDealership('SilverStar');
dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());
console.log('--------------------------------');
class CreateAccount {
    bankName;
    bankId;
    constructor(name, id) {
        this.bankName = name;
        this.bankId = id;
    }
}
;
class PersonalAccount extends CreateAccount {
    ownerName;
    money = 0;
    recentTransactions = {};
    constructor(bankName, bankID, name) {
        super(bankName, bankID);
        this.ownerName = name;
    }
    deposit(amount) {
        this.money += amount;
    }
    expense(amount, expenseType) {
        if (amount <= this.money) {
            if (this.recentTransactions.hasOwnProperty(expenseType)) {
                this.recentTransactions[expenseType] += amount;
            }
            else {
                this.recentTransactions[expenseType] = amount;
            }
            this.money -= amount;
        }
        else {
            return `You can't make ${expenseType} transaction`;
        }
    }
    showDetails() {
        let totalMoneySpent = 0;
        for (const value of Object.values(this.recentTransactions)) {
            totalMoneySpent += value;
        }
        return `Bank name: ${this.bankName}
Bank ID: ${this.bankId}
Owner name: ${this.ownerName}
Money: ${this.money}
Money spent: ${totalMoneySpent}`;
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
//# sourceMappingURL=app.js.map