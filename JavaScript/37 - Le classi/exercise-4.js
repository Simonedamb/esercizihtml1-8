class BankAccount {
  constructor(capital) {
    this.capital = capital;
  }

  deposit(value) {
    this.capital += value;
  }
  withdraw(value) {
    this.capital -= value;
  }
  view() {
    console.log(this.capital);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
