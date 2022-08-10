import FundNotAvailableError from "./exception/fundNotAvailableError";
import AccountNotExistsError from "./exception/accountNotExistError";

class ATM {
  private atmId: number;
  private address: Address;
  private cashDispenser: CashDispenser;
  private screen: Screen;
  private cardReader: CardReader;
  private cashDeposit: CashDeposit;
  private checkDeposit: CheckDeposit;
  private keyPad: KeyPad;
  private bankService: BankService;
  public authenticate(cardInfo: CardInfo): boolean {
    return false;
  }
  public makeTransaction(customer: Customer, transaction: Transaction): void {}
}

class Address {
  private street: string;
  private city: string;
  private state: string;
  private country: string;
  private pinCode: string;
}

class CashDispenser {
  private cashAvailable: Map<CashType, Array<Cash>>;
  public dispenseAmount(amount: number): void {}
}

enum CashType {
  FIFTY,
  HUNDRED,
  FIVEHUNDRED,
}

class Cash {
  private cashType: CashType;
  private serialNumber: string;
}

class Screen {
  public display(message: String): void {}
}

class CardReader {
  public fetchCardDetails(): CardInfo {
    return null;
  }
}

class CardInfo {
  private cardType: CardType;
  //   private bank: Bank; // doesn't seems required
  private cardNumber: string;
  private customerName: string;
  private expiryDate: Date;
  private cvv: number;
  private cardStatus: CardStatus;
  private withdrawalLimit: number;
}

enum CardType {
  DEBIT,
  CREDIT,
}

enum CardStatus {
  ACTIVE,
  BLOCKED,
}

class KeyPad {
  public getInput(): string {
    return "";
  }
}

class Bank {
  private name: string;
  private bankCode: string;
  private location: Address;
  private atmList: Array<ATM>;
}

interface BankService {
  isValidUser(pin: number, cardInfo: CardInfo): boolean;
  getCustomerDetails(cardInfo: CardInfo): Customer;
  executeTransaction(
    transactionInfo: Transaction,
    customerInfo: Customer
  ): TransactionDetial;
}

class BankA {
  public isValidUser(pin: number, cardInfo: CardInfo): boolean {
    return true;
  }
  public getCustomerDetails(cardInfo: CardInfo): Customer {
    return null;
  }

  public executeTransaction(
    transactionInfo: Transaction,
    customerInfo: Customer
  ): TransactionDetial {
    return null;
  }
}

class BankB {
  public isValidUser(pin: number, cardInfo: CardInfo): boolean {
    return true;
  }
  public getCustomerDetails(cardInfo: CardInfo): Customer {
    return null;
  }

  public executeTransaction(
    transactionInfo: Transaction,
    customerInfo: Customer
  ): TransactionDetial {
    return null;
  }
}

/**
 * factory class to get the Bank service (e.g, BankA / BankB)
 */
class BankFactory {
  public getBankService(cardInfo: CardInfo): BankService {
    return null;
  }
}

class Customer {
  private firstName: string;
  private lastName: string;
  private account: Account;
  private cardInfo: CardInfo;
  private bankService: BankService; //do we need this here?
  private customerStatus: CustomerStatus;
  //assuming ATM object will make these calls commenting it out
  //   withdrawCash(amount: number): void {}
  //   checkBalance(): number {
  //     return 0;
  //   }
  //   depositCash(amount: number): void {}
  //   transferFund(toAccount: Account): void {}
}

//we can further divide the Account class in subclasses depending on req, e.g, Saving/Current
class Account {
  private accountNumber: string;
  private totalBalance: number;
  private availableBalance: number;
}

class SavingAccount extends Account {
  private withdrawalLimit: number;
}

class CheckingAccount extends Account {
  private debitCardNumber: number;
}

enum CustomerStatus {
  ACTIVE,
  BLOCKED,
  DORMANT,
  CLOSED,
}

abstract class Transaction {
  private transactionId: number;
  private sourceAccount: Account;
  private transactionDate: Date;
}

class Deposit extends Transaction {
  private amount: number;
}

class CashDeposit extends Deposit {
  public getCash(): Array<Cash> {
    return null;
  }
}

class CheckDeposit extends Deposit {
  public getCheque(): Cheque {
    return null;
  }
}

class Withdraw extends Transaction {
  private amount: number;
}

class Transfer extends Transaction {
  private destAccount: Account;
  private amount: number;
}

class TransactionDetail {
  private txnId: string;
  private transactionStatus: TransactionStatus;
  private transactionDate: Date;
  private sourceAccountNumber: string;
  private transactionType: TransactionType;
}

enum TransactionStatus {
  SUCCESS,
  PENDING,
  CANCEL,
  ERROR,
}

enum TransactionType {
  WITHDRAW,
  TRANSFER,
  DEPOSIT,
}

export {};
