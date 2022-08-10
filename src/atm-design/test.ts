class Account {
  private accountNumber: string;
  private totalBalance: number;
  private availableBalance: number;
  constructor(
    accountNumber: string,
    totalBalance: number,
    availableBalance: number
  ) {
    this.accountNumber = accountNumber;
    this.totalBalance = totalBalance;
    this.availableBalance = availableBalance;
  }
}

abstract class Transaction {
  private transactionId: number;
  private sourceAccount: Account;
  private transactionDate: Date;
  constructor(
    transactionId: number,
    sourceAccount: Account,
    transactionDate: Date
  ) {
    this.transactionId = transactionId;
    this.sourceAccount = sourceAccount;
    this.transactionDate = transactionDate;
  }
}

class Deposit extends Transaction {
  private amount: number;
  constructor(
    transactionId: number,
    sourceAccount: Account,
    transactionDate: Date,
    amount: number
  ) {
    super(transactionId, sourceAccount, transactionDate);
    this.amount = amount;
  }
}

class CashDeposit extends Deposit {
  constructor(
    transactionId: number,
    sourceAccount: Account,
    transactionDate: Date,
    amount: number
  ) {
    super(transactionId, sourceAccount, transactionDate, amount);
  }

  public getCash(): number {
    return 100;
  }
}

class CheckDeposit extends Deposit {
  constructor(
    transactionId: number,
    sourceAccount: Account,
    transactionDate: Date,
    amount: number
  ) {
    super(transactionId, sourceAccount, transactionDate, amount);
  }
  public getCheque(): string {
    return "XYQ";
  }
}

class Withdraw extends Transaction {
  private amount: number;
}

class ATM {
  public makeTransaction(customer: number, transaction: Transaction): void {}
}

class Test {
  constructor() {
    const account = new Account("1234", 100, 100);
    //cash deposit
    // const txn1: Transaction = new CashDeposit(27823, account, new Date(), 100);
    const txn1: CashDeposit = new CashDeposit(27823, account, new Date(), 100);
    console.log(`txn1 getCash(): ${txn1.getCash()}`);
    const atm = new ATM();
    //passing the sub-class in place of super class at run time
    atm.makeTransaction(100, txn1);
  }
}
