namespace Greeter {
    export interface Greeting<T> {
        introduction(): string,
        sayGoodbye(name: T): string
    }
}

namespace FoodAndBeverages {
    export interface Delivery {
        newCustomer(customerName: string, visited: boolean),
        visitCustomer(customerName: string),
        showCustomers(): string
    }

    export type placesToVisitObject = {
        customerName: string,
        visited: boolean
    }
}