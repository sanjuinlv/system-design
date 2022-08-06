class Library {
  private name: string;
  private location: Address;
  private books: BookItem[];
}

class Book {
  private uniqueIdNumber: string;
  private title: string;
  private authors: Author[];
  private bookType: BookType;
  private bookName: string;
}

class BookItem extends Book {
  private barCode: string;
  private publicationDate: Date;
  private rackLocation: Rack;
  private status: BookStatus;
  private bookFormat: BookFormat;
  private issueDate: Date;
}

class Address {
  private street: string;
  private city: string;
  private state: string;
  private country: string;
  private pinCode: string;
}

enum BookType {
  SCI_FI,
  ROMANTIC,
  FANTASY,
  DRAMA,
}

enum BookStatus {
  ISSUED,
  AVAILABLE,
  RESERVED,
  LOST,
}

enum BookFormat {
  HARDCOVER,
  PAPERBACK,
  NEWSPAPER,
  JOURNAL,
}

class Rack {
  private rackNumber: number;
  private locationId: string;
}

abstract class Person {
  private firstName: string;
  private lastName: string;
}

class Author extends Person {
  private bookPublished: Book[];
}

class SystemUser extends Person {
  private email: string;
  private phoneNumber: string;
  private account: Account;
}

class Member extends SystemUser {
  private totalBookCheckout: number;
  private searchObj: Search;
  private issueService: BookIssueService;
}

class Librarian extends SystemUser {
  private searchObj: Search;
  private issueService: BookIssueService;

  private empId: number;

  addBookItem(book: BookItem): void {}
  editBookItem(book: BookItem): void {}
  removeBookItem(barCode: string): void {}
}

class Account {
  private userName: string;
  private password: string;
  private accountId: number;
}

class Search {
  getBookByTitle(title: string): Book[] {
    return [];
  }
  getBookByAuthor(author: Author): Book[] {
    return [];
  }
  getBookByType(bookType: BookType): Book[] {
    return [];
  }
  getBookByPublicationDate(publicationDate: Date): Book[] {
    return [];
  }
}

class BookIssueService {
  private fine: Fine;
  getReservationDetails(): BookReservationDetail {
    return null;
  }
  updateReservationDetails(
    bookReservationDetail: BookReservationDetail
  ): void {}
  reserveBook(bookItem: BookItem, user: SystemUser): BookReservationDetail {
    return null;
  }
  issueBook(bookItem: BookItem, user: SystemUser): BookReservationDetail {
    return null;
  }
  // it will internally call the issueBook function after basic validations
  renewBook(bookItem: BookItem, user: SystemUser): BookReservationDetail {
    return null;
  }
  returnBook(bookItem: BookItem, user: SystemUser): void {}
}

class BookLending {
  private book: BookItem;
  private user: SystemUser;
  private startDate: Date;
}

class BookReservationDetail extends BookLending {
  private reservationStatus: BookStatus;
}

class BookIssueDetail extends BookLending {
  private dueDate: Date;
}

class Fine {
  private user: SystemUser;
  private book: BookItem;
  private fineDate: Date;
  calculateFine(days: number): number {
    return 0;
  }
}

class System {
  sendNotification(): void {}
}

export {};
