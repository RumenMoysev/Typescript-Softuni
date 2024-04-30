import { Drink } from "./Drink";

interface VendingMachineInterface {
    buttonCapacity: number,
    drinks: Drink[],
    getCount: number,
    addDrink(drink: Drink): void,
    removeDrink(name: string): boolean,
    getLongest(): string,
    getCheapest(): string,
    buyDrink(name: string): string,
    report(): string
}

export class VendingMachine implements VendingMachineInterface{
    buttonCapacity: number
    drinks: Drink[] = []

    constructor(buttonCapacity: number) {
        this.buttonCapacity = buttonCapacity
    }

    get getCount(): number {
        return this.drinks.length
    }

    addDrink(drink: Drink): void {
        if(this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink)
        }
    }

    removeDrink(name: string): boolean {
        const drinkIndex: number = this.drinks.findIndex(x => x.name === name)

        if(drinkIndex >= 0) {
            this.drinks.splice(drinkIndex, 1)
            return true
        } else {
            return false
        }
    }

    getLongest(): string {
        let longestDrink: Drink | undefined
        let drinkVolume: number = 0

        for(const el of this.drinks) {
            if(el.volume > drinkVolume) {
                drinkVolume = el.volume
                longestDrink = el
            }
        }

        return longestDrink.toString()
    }

    getCheapest(): string {
        let cheapestDrink: Drink = this.drinks[0]
        let drinkPrice: number = this.drinks[0].price

        for(let i = 1; i < this.drinks.length; i++) {
            if(this.drinks[i].price < drinkPrice) {
                cheapestDrink = this.drinks[i]
            }
        }

        return cheapestDrink.toString()
    }

    buyDrink(name: string): string {
        const drink: Drink = this.drinks.find(x => x.name === name)

        return drink.toString()
    }

    report(): string {
        return `Drinks available:\n${this.drinks.map(x => x.toString()).join('\n')}`
    }
}