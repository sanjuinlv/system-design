class Hotel {
  private name: string;
  private description: string;
  private id: number;
  private location: HotelLocation;
  private rooms: Array<Room>;
}

class HotelLocation {
  private longitude: number; //double
  private latitude: number; //double
}

class Room {
  private roomNumber: number;
  private roomSize: RoomStyle;
  private roomStatus: RoomStatus;
  private bookingPrice: number; //double
  private roomKeys: Array<RoomKey>;
  private houseKeepingLogs: Array<HouseKeepingLog>;
}

enum RoomStyle {
  STANDARD,
  DELUXE,
  FAMILY_SUITE,
}

enum RoomStatus {
  AVAILABLE,
  RESERVED,
  NOT_AVAILABLE,
  OCCUPIED,
  SERVICE_IN_PROGRESS,
}

class RoomKey {
  private keyId: number;
  private barCode: string;
  private issuedAt: Date;
  private isActive: boolean;
  private isMaster: boolean;
  public assignRoom(room: Room): void {}
}

class HouseKeepingLog {
  private description: string;
  private startDate: Date;
  private duration: number;
  private houseKeeper: HouseKeeper;
  public addRoom(room: Room): void {}
}

class Account {
  private username: string;
  private password: string;
  private accountStatus: AccountStatus;
}

enum AccountStatus {
  ACTIVE,
  CLOSED,
  BLOCKED,
}

abstract class Person {
  private name: string;
  private phone: string;
  private accountDetail: Account;
}

class HouseKeeper extends Person {
  public getRoomServiced(date: Date): Array<Room> {
    return []; //to make it compile
  }
}

class Guest extends Person {
  private searchObj: SearchService;
  private bookObj: BookingService;

  public createBooking(): RoomBooking {
    return null;
  }
  public cancelBooking(bookingId: number): RoomBooking {
    return null;
  }
  public getAllBooking(): Array<RoomBooking> {
    return [];
  }
}

class Receptionist extends Person {
  private searchObj: SearchService;
  private bookObj: BookingService;
  public checkInGuest(guest: Guest, bookingInfo: RoomBooking): void {}
  public checkOutGuest(guest: Guest, bookingInfo: RoomBooking): void {}
}

class Admin extends Person {
  public addRoom(roomDetails: Room): void {}
  public removeRoom(roomId: string): void {}
  public editRoom(roomDetails: Room): void {}
}

class SearchService {
  public searchRoom(
    roomStyle: RoomStyle,
    startDate: Date,
    duration: number
  ): Array<Room> {
    return [];
  }
}

class RoomBooking {
  private bookingId: number;
  private startDate: Date;
  private duration: number;
  private bookingStatus: BookingStatus;
  private guestList: Array<Guest>;
  private roomInfo: Array<Room>;
  // shouldn't it be amount in number?
  // private totalRoomCharges: BaseRoomCharge;
  private totalRoomCharges: number;
}

class BookingService {
  public createBooking(guestInfo: Guest) {}
  public cancelBooking(bookingId: number) {}
}

/**
 * Decorator pattern used for charges
 */

interface BaseRoomCharge {
  getCost(): number;
}

class RoomCharge implements BaseRoomCharge {
  private cost: number;
  public getCost(): number {
    return this.cost;
  }
  public setCost(cost): void {
    this.cost = cost;
  }
}

class RoomServiceCharge implements BaseRoomCharge {
  private cost: number;
  private baseRoomCharge: BaseRoomCharge;
  constructor(baseRoomCharge: BaseRoomCharge) {
    this.baseRoomCharge = baseRoomCharge;
  }
  public getCost(): number {
    return this.baseRoomCharge.getCost() + this.cost;
  }
  public setCost(cost): void {
    this.cost = cost;
  }
}

class InRoomPurchaseCharges implements BaseRoomCharge {
  private cost: number;
  private baseRoomCharge: BaseRoomCharge;
  constructor(baseRoomCharge: BaseRoomCharge) {
    this.baseRoomCharge = baseRoomCharge;
  }
  public getCost(): number {
    return this.baseRoomCharge.getCost() + this.cost;
  }
  public setCost(cost): void {
    this.cost = cost;
  }
}

//this to avoid the duplicate identifier issue due to class in class name,
//e,g, Person, declared in other file
export {};
