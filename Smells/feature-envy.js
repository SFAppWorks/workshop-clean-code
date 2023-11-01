/**
 * In this example, the calculateTotal method in the Invoice class seems more interested
 * in the Customer class than in its own class.
 * It accesses the Customer class methods (getDiscountRate and getTaxRate) to get the values it needs,
 * which is a sign of Feature Envy.
 */
class Customer {
    constructor(discountRate, taxRate) {
        this.discountRate = discountRate;
        this.taxRate = taxRate;
    }

    getDiscountRate() {
        return this.discountRate;
    }

    getTaxRate() {
        return this.taxRate;
    }
}

class Invoice {
    constructor(customer, items) {
        this.customer = customer;
        this.items = items; // Assume items is an array of { price: number, quantity: number }
    }

    calculateTotal() {
        let subTotal = 0;
        let discount = 0;
        let tax = 0;
        let total = 0;

        for (const item of this.items) {
            subTotal += item.price * item.quantity;
        }

        // Feature envy: Invoice is more interested in Customer data.
        discount = subTotal * this.customer.getDiscountRate();
        tax = subTotal * this.customer.getTaxRate();

        total = subTotal - discount + tax;
        return total;
    }
}
















// Usage
const customer = new Customer(0.1, 0.2);
const items = [
    { price: 100, quantity: 2 },
    { price: 200, quantity: 1 },
];
const invoice = new Invoice(customer, items);

console.log(`Total invoice amount is: ${invoice.calculateTotal()}`);


/**
 * In this refactored code, the Invoice class calculates the subtotal,
 * which is directly related to its own data (items).
 * Then it calls the calculateDiscount and calculateTax methods of
 * the Customer class to calculate the discount and tax,
 * delegating those responsibilities to the Customer class, where they more naturally belong.
 */
class Customer {
    constructor(discountRate, taxRate) {
        this.discountRate = discountRate;
        this.taxRate = taxRate;
    }

    calculateDiscount(subTotal) {
        return subTotal * this.discountRate;
    }

    calculateTax(subTotal) {
        return subTotal * this.taxRate;
    }
}

class Invoice {
    constructor(customer, items) {
        this.customer = customer;
        this.items = items; // Assume items is an array of { price: number, quantity: number }
    }

    calculateSubTotal() {
        let subTotal = 0;
        for (const item of this.items) {
            subTotal += item.price * item.quantity;
        }
        return subTotal;
    }

    calculateTotal() {
        const subTotal = this.calculateSubTotal();

        // Delegate responsibility of calculating discount and tax to Customer
        const discount = this.customer.calculateDiscount(subTotal);
        const tax = this.customer.calculateTax(subTotal);

        const total = subTotal - discount + tax;
        return total;
    }
}

// Usage
const customer = new Customer(0.1, 0.2);
const items = [
    { price: 100, quantity: 2 },
    { price: 200, quantity: 1 },
];
const invoice = new Invoice(customer, items);

console.log(`Total invoice amount is: ${invoice.calculateTotal()}`);