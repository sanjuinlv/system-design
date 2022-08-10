//Models
class Contact {
  private phone: string;
  private email: string;
}

export abstract class LockerUser {
  private readonly contact: Contact;
  constructor(contact: Contact) {
    this.contact = contact;
  }
}

export class Buyer extends LockerUser {
  constructor(contact: Contact) {
    super(contact);
  }
}

class DeliveryPerson extends LockerUser {
  constructor(contact: Contact) {
    super(contact);
  }
}

export class Locker {
  private id: string;
  private slots: Array<Slot>;

  constructor(id: string) {
    this.id = id;
  }

  public addSlot(newSlot: Slot): void {
    this.slots.push(newSlot);
  }

  public getAvailableSlots(): Slot[] {
    const availableSlots: Slot[] = [];
    for (let slot of this.slots) {
      if (slot.isAvailable()) {
        availableSlots.push(slot);
      }
    }
    return availableSlots;
  }
}

export class Slot {
  private readonly slotId: string;
  private readonly size: Size;
  private readonly locker: Locker; //optional. used for reverse mapping
  private currentLockerItem: LockerItem | null;
  private allocationDate: Date;

  public allocatePackage(newLockerItem: LockerItem): void {
    if (!this.isAvailable()) throw Error("SlotAlready occupied");
    this.currentLockerItem = newLockerItem;
    this.allocationDate = new Date();
  }

  public deAllocateSlot(): void {
    this.currentLockerItem = null;
  }

  public isAvailable(): boolean {
    return this.currentLockerItem === null;
  }
}

export interface LockerItem {
  getSize(): Size;
}

class Package implements LockerItem {
  private readonly id: string;
  private readonly size: Size;

  constructor(id: string, size: Size) {
    this.id = id;
    this.size = size;
  }

  getSize(): Size {
    return this.size;
  }
}

class Size {
  private readonly width: number;
  private readonly height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public canAccommodate(sizeToAccommodate: Size) {
    return (
      this.width >= sizeToAccommodate.width &&
      this.height >= sizeToAccommodate.height
    );
  }
}
