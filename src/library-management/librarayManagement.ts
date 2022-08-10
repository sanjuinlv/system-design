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
  private searchObj: SearchService;
  private issueService: BookIssueService;
}

class Librarian extends SystemUser {
  private searchObj: SearchService;
  private issueService: BookIssueService;

  private empId: number;

  public addBookItem(book: BookItem): void {}
  public editBookItem(book: BookItem): void {}
  public removeBookItem(barCode: string): void {}
}

class Account {
  private userName: string;
  private password: string;
  private accountId: number;
}

class SearchService {
  public getBookByTitle(title: string): Book[] {
    return [];
  }
  public getBookByAuthor(author: Author): Book[] {
    return [];
  }
  public getBookByType(bookType: BookType): Book[] {
    return [];
  }
  public getBookByPublicationDate(publicationDate: Date): Book[] {
    return [];
  }
}

class BookIssueService {
  private fine: Fine;
  public getReservationDetails(): BookReservationDetail {
    return null;
  }
  public updateReservationDetails(
    bookReservationDetail: BookReservationDetail
  ): void {}
  public reserveBook(
    bookItem: BookItem,
    user: SystemUser
  ): BookReservationDetail {
    return null;
  }
  public issueBook(
    bookItem: BookItem,
    user: SystemUser
  ): BookReservationDetail {
    return null;
  }
  // it will internally call the issueBook function after basic validations
  public renewBook(
    bookItem: BookItem,
    user: SystemUser
  ): BookReservationDetail {
    return null;
  }
  public returnBook(bookItem: BookItem, user: SystemUser): void {}
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
  public calculateFine(days: number): number {
    return 0;
  }
}

class System {
  public sendNotification(): void {}
}

export {};
