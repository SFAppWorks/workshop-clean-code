class PaymentProcessor {
    processCreditCard(user, amount) {
        console.log(`Processing credit card payment for ${user} of ${amount}`);
    }

    processPayPal(user, amount) {
        console.log(`Processing PayPal payment for ${user} of ${amount}`);
    }

    processCrypto(user, amount, cryptoType) {
        console.log(`Processing ${cryptoType} payment for ${user} of ${amount}`);
    }
}

class Shop extends PaymentProcessor {
    // The Shop class is forced to handle all types of payments
}

const myShop = new Shop();
myShop.processCreditCard('Alex', 100);