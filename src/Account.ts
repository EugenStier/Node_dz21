abstract class Account {
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Insufficient balance.");
    }
  }

  addInterest(rate: number): void {
    const interest = this.balance * rate;
    this.balance += interest;
    console.log(`Added interest ${interest}. New balance: ${this.balance}`);
  }
}

class CheckingAccount extends Account {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    const fee = 1; // Комиссия
    if (this.balance >= amount + fee) {
      this.balance -= amount + fee;
      console.log(
        `Withdrew ${amount} with fee ${fee}. New balance: ${this.balance}`
      );
    } else {
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
