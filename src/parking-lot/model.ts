class Car {
  private registrationNumber: string;
  private color: string;

  constructor(registrationNumber: string, color: string) {
    this.registrationNumber = registrationNumber;
    this.color = color;
  }
  public getRegistrationNumber(): string {
    return this.registrationNumber;
  }

  public getColor(): string {
    return this.color;
  }
}

class Slot {
  private readonly slotNumber: number;
  private parkedCar: Car | null;

  constructor(slotNumber: number) {
    this.slotNumber = slotNumber;
  }

  public getSlotNumber(): number {
    return this.slotNumber;
  }

  public getParkedCar(): Car | null {
    return this.parkedCar;
  }

  public assignCar(car: Car): void {
    this.parkedCar = car;
  }

  public unassignCar(): void {
    this.parkedCar = null;
  }
  public isSlotFree(): boolean {
    return this.parkedCar == null;
  }
}

class ParkingLot {
  private static MAX_CAPACITY = 1000;
  private capacity: number;
  private slots: Map<number, Slot>;

  constructor(capacity: number) {
    if (capacity > ParkingLot.MAX_CAPACITY) {
      throw new Error("Invalid Capacity Given");
    }
    this.capacity = capacity;
    this.slots = new Map();
  }

  public getCapacity(): number {
    return this.capacity;
  }

  public getSlots(): Map<number, Slot> {
    return this.slots;
  }

  public getSlot(slotNumber: number): Slot | undefined {
    if (slotNumber > this.capacity || slotNumber <= 0) {
      throw new Error("Invalid Slot");
    }
    if (!this.slots.has(slotNumber)) {
      this.slots.set(slotNumber, new Slot(slotNumber));
    }
    return this.slots.get(slotNumber);
  }

  public parkCar(car: Car, slotNumber: number): Slot {
    const slot = this.slots.get(slotNumber);
    if (!(slot && slot.isSlotFree())) {
      throw new Error("Slot Already Occupied Exception");
    }
    slot.assignCar(car);
    return slot;
  }

  public makeSlotFree(slotNumber: number): Slot | undefined {
    const slot = this.slots.get(slotNumber);
    slot?.unassignCar();
    return slot;
  }
}

class Command {
  private static readonly SPACE = " ";
  private commandName: string;
  private params: Array<string>;

  constructor(inputLine: string) {
    //parse input line and store the command name and params
  }
  public getParams(): string[] {
    return this.params;
  }

  public getCommandName(): string {
    return this.commandName;
  }
}
