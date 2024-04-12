function calorieObject(x) {
    const object = {};
    let i = 0;
    while (i < x.length) {
        object[x[i]] = x[++i];
        i++;
    }
    return object;
}
console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));
console.log('-----------------------------------------');
function personInfo(name, familyName, age) {
    return { firstName: name, lastName: familyName, age: Number(age) };
}
console.log(personInfo("Peter", "Pan", "20"));
console.log('-----------------------------------------');
function inventory(x) {
    let arr = [];
    let str = '';
    for (const el of x) {
        let [name, level, items] = el.split(' / ');
        arr.push({ name, level: Number(level), items });
    }
    arr = arr.sort((a, b) => b.level - a.level);
    for (const el of arr) {
        str += `Hero: ${el.name}\nlevel => ${el.level}\nitems => ${el.items}\n`;
    }
    return str.trim();
}
console.log(inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']));
console.log('-----------------------------------------');
function towns(x) {
    const arr = [];
    for (const el of x) {
        const [town, latitude, longitude] = el.split(' | ');
        arr.push({ town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2) });
    }
    return arr;
}
console.log(towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']));
console.log('-----------------------------------------');
function townPopulation(x) {
    const obj = {};
    const arr = [];
    for (const el of x) {
        const [name, population] = el.split(' <-> ');
        if (obj.hasOwnProperty(name)) {
            obj[name] += Number(population);
        }
        else {
            obj[name] = Number(population);
        }
    }
    for (const [key, value] of Object.entries(obj)) {
        arr.push(`${key}: ${value}`);
    }
    return arr.join('\n');
}
console.log(townPopulation(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000']));
console.log('-----------------------------------------');
function lowestPricesInCities(x) {
    const obj = {};
    let str = '';
    for (const el of x) {
        const [city, name, price] = el.split(' | ');
        if (obj.hasOwnProperty(name)) {
            if (Number(obj[name].price) > Number(price)) {
                obj[name].price = Number(price);
                obj[name].city = city;
            }
        }
        else {
            obj[name] = {
                price: Number(price),
                city: city
            };
        }
    }
    for (const [key, value] of Object.entries(obj)) {
        str += `${key} -> ${value.price} (${value.city})\n`;
    }
    return str.trim();
}
console.log(lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']));
//# sourceMappingURL=app.js.map