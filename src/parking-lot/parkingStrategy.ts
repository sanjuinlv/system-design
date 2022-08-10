interface ParkingStrategy {
  addSlot(slotNumber: number): void;
  removeSlot(slotNumber: number): void;
  getNextSlot(): number;
}

class NaturalOrderingParkingStrategy implements ParkingStrategy {
  //This should be TreeSet in case of Java
  private slotsSet: Set<number>;
  constructor() {
    this.slotsSet = new Set();
  }

  addSlot(slotNumber: number): void {
    this.slotsSet.add(slotNumber);
  }
  removeSlot(slotNumber: number): void {
    this.slotsSet.delete(slotNumber);
  }
  getNextSlot(): number {
    if (this.slotsSet.size === 0) {
      throw new Error("No Slot Free Exception");
    }
    //return the first element in set
    return [...this.slotsSet][0];
  }
}
