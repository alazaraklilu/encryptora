
// Demo pattern

// Base Coffee Class
class Coffee {
    cost() {
        return 5; // Base price of plain coffee
    }
}

// Milk Decorator Class
class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 1; // Add cost of milk
    }
}

// Sugar Decorator Class
class SugarDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 0.5; // Add cost of sugar
    }
}

// Usage
let myCoffee = new Coffee();
console.log(`Plain coffee: $${myCoffee.cost()}`); // Plain coffee: $5

myCoffee = new MilkDecorator(myCoffee); // Add milk
console.log(`Coffee with milk: $${myCoffee.cost()}`); // Coffee with milk: $6

myCoffee = new SugarDecorator(myCoffee); // Add sugar
console.log(`Coffee with milk and sugar: $${myCoffee.cost()}`); // Coffee with milk and sugar: $6.5




