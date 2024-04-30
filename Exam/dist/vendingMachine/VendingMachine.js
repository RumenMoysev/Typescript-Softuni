"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    buttonCapacity;
    drinks = [];
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
    }
    get getCount() {
        return this.drinks.length;
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const drinkIndex = this.drinks.findIndex(x => x.name === name);
        if (drinkIndex >= 0) {
            this.drinks.splice(drinkIndex, 1);
            return true;
        }
        else {
            return false;
        }
    }
    getLongest() {
        let longestDrink;
        let drinkVolume = 0;
        for (const el of this.drinks) {
            if (el.volume > drinkVolume) {
                drinkVolume = el.volume;
                longestDrink = el;
            }
        }
        return longestDrink.toString();
    }
    getCheapest() {
        let cheapestDrink = this.drinks[0];
        let drinkPrice = this.drinks[0].price;
        for (let i = 1; i < this.drinks.length; i++) {
            if (this.drinks[i].price < drinkPrice) {
                cheapestDrink = this.drinks[i];
            }
        }
        return cheapestDrink.toString();
    }
    buyDrink(name) {
        const drink = this.drinks.find(x => x.name === name);
        return drink.toString();
    }
    report() {
        return `Drinks available:\n${this.drinks.map(x => x.toString()).join('\n')}`;
    }
}
exports.VendingMachine = VendingMachine;
//# sourceMappingURL=VendingMachine.js.map