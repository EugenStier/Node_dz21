"use strict";
class Account {
}
class SavingsAccount extends Account {
    constructor() {
        super(...arguments);
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        }
        else {
            console.log("Insufficient balance.");
        }
    }
    addInterest(rate) {
        const interest = this.balance * rate;
        this.balance += interest;
        console.log(`Added interest ${interest}. New balance: ${this.balance}`);
    }
}
class CheckingAccount extends Account {
    constructor() {
        super(...arguments);
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
    withdraw(amount) {
        const fee = 1; // Комиссия
        if (this.balance >= amount + fee) {
            this.balance -= amount + fee;
            console.log(`Withdrew ${amount} with fee ${fee}. New balance: ${this.balance}`);
        }
        else {
            console.log("Insufficient balance.");
        }
    }
}
// Использование
const savings = new SavingsAccount();
savings.deposit(100);
savings.addInterest(0.05);
savings.withdraw(50);
const checking = new CheckingAccount();
checking.deposit(200);
checking.withdraw(50);
