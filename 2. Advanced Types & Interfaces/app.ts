function calorieObject(x: string[]): object {
    const object: object = {};
    let i: number = 0;

    while(i < x.length) {
        object[x[i]] = x[++i];
        i++
    }

    return object;
}

console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));
console.log('-----------------------------------------');

function personInfo(name: string, familyName: string, age: string): object {
    return {firstName: name, lastName: familyName, age: Number(age)}
}

console.log(personInfo("Peter", "Pan", "20"));
console.log('-----------------------------------------');


function inventory(x: string[]): string {
    type Hero = {
        name: string,
        level: number,
        items: string
    }

    let arr: Hero[] = [];
    let str: string = '';

    for(const el of x) {
        let [name, level, items]: string[] = el.split(' / ');

        arr.push({name, level: Number(level), items});
    }

    arr = arr.sort((a,b) => b.level - a.level);

    for(const el of arr) {
        str += `Hero: ${el.name}\nlevel => ${el.level}\nitems => ${el.items}\n`;
    }

    return str.trim();
}

console.log(inventory(['Isacc / 25 / Apple, GravityGun','Derek / 12 / BarrelVest, DestructionSword','Hes / 1 / Desolator, Sentinel, Antara']))
console.log('-----------------------------------------');

function towns(x: string[]) {
    type TownData = {
        town: string;
        latitude: string,
        longitude: string
    }

    const arr: TownData[] = []

    for(const el of x) {
        const [town, latitude, longitude] = el.split(' | ')

        arr.push({town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2)})
    }

    return arr
}

console.log(towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']))
console.log('-----------------------------------------');

function townPopulation(x: string[]) {
    const obj: object = {}
    const arr: string[] = []

    for(const el of x) {
        const [name, population]: string[] = el.split(' <-> ')

        if(obj.hasOwnProperty(name)) {
            obj[name] += Number(population)
        } else {
            obj[name] = Number(population)
        }
    }

    for(const [key, value] of Object.entries(obj)) {
        arr.push(`${key}: ${value}`)
    }

    return arr.join('\n')
}

console.log(townPopulation(['Istanbul <-> 100000','Honk Kong <-> 2100004','Jerusalem <-> 2352344','Mexico City <-> 23401925','Istanbul <-> 1000']));
console.log('-----------------------------------------');

function lowestPricesInCities(x: string[]): string {
    const obj: object = {}
    let str: string = ''

    for(const el of x) {
        const [city, name, price]: string[] = el.split(' | ')

        if(obj.hasOwnProperty(name)) {
            if(Number(obj[name].price) > Number(price)) {
                obj[name].price = Number(price)
                obj[name].city = city
            }
        } else {
            obj[name] = {
                price: Number(price),
                city: city
            }
        }
    }

    for(const [key, value] of Object.entries(obj)) {
        str += `${key} -> ${value.price} (${value.city})\n`
    }

    return str.trim()
}

console.log(lowestPricesInCities(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10']))