class ParkingLotService {
  private parkingLot: ParkingLot;
  private parkingStrategy: ParkingStrategy;

  public createParkingLot(
    parkingLot: ParkingLot,
    parkingStrategy: ParkingStrategy
  ) {
    if (this.parkingLot !== null) {
      throw new Error("Parking lot already exists");
    }
    this.parkingLot = parkingLot;
    this.parkingStrategy = parkingStrategy;
    for (let i = 1; i <= parkingLot.getCapacity(); i++) {
      this.parkingStrategy.addSlot(i);
    }
  }

  public park(car: Car, slotNumber: number): number {
    this.validateParkingLotExists();
    const nextFreeSlot = this.parkingStrategy.getNextSlot();
    this.parkingLot.parkCar(car, nextFreeSlot);
    this.parkingStrategy.removeSlot(nextFreeSlot);
    return nextFreeSlot;
  }

  public makeSlotFree(slotNumber: number) {
    this.validateParkingLotExists();
    this.parkingLot.makeSlotFree(slotNumber);
    this.parkingStrategy.addSlot(slotNumber);
  }

  public getOccupiedSlots() {
    const occupiedSlots: Slot[] = [];
    const allSlots = this.parkingLot.getSlots().values();
    for (let slot of allSlots) {
      if (!slot.isSlotFree()) {
        occupiedSlots.push(slot);
      }
    }
    return occupiedSlots;
  }

  getSlotsForColor(color: string) {
    const occupiedSlots = this.getOccupiedSlots();
    return occupiedSlots.filter(
      (slot) => slot.getParkedCar()?.getColor() === color
    );
  }

  validateParkingLotExists() {
    if (this.parkingLot == null) throw new Error("Method not implemented.");
  }
}
