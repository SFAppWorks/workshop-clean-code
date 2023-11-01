class BasicPaymentProcessor {
    process(user, amount) {
        console.log(`Processing generic payment for ${user} of ${amount}`);
    }
}

// Credit Card payment
class CreditCardPaymentProcessor {
    processCreditCard(user, amount) {
        console.log(`Processing credit card payment for ${user} of ${amount}`);
    }
}

// PayPal payment
class PayPalPaymentProcessor {
    processPayPal(user, amount) {
        console.log(`Processing PayPal payment for ${user} of ${amount}`);
    }
}

// Crypto payment
class CryptoPaymentProcessor {
    processCrypto(user, amount, cryptoType) {
        console.log(`Processing ${cryptoType} payment for ${user} of ${amount}`);
    }
}

// Combined Shop class using composition
class Shop {
    constructor() {
        this.basicPayment = new BasicPaymentProcessor();
        this.creditCardPayment = new CreditCardPaymentProcessor();
        this.payPalPayment = new PayPalPaymentProcessor();
        this.cryptoPayment = new CryptoPaymentProcessor();
    }

    // Now, you can add methods to process payments based on the type
}

const myShop = new Shop();
myShop.creditCardPayment.processCreditCard('Alex', 100);