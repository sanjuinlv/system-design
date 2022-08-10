import { Buyer, Locker, LockerItem, LockerUser, Slot } from "./models";

export class LockerService {
  createLocker(locker: Locker): Locker {
    throw new Error("Method not implemented.");
  }
  createSlot(slot: Slot): Slot {
    throw new Error("Method not implemented.");
  }
  getAllAvailableSlots(): Slot[] {
    throw new Error("Method not implemented.");
  }
  allocateSlot(lockerItem: LockerItem): Slot {
    throw new Error("Method not implemented.");
  }
  deallocateSlot(slot: Slot): boolean {
    throw new Error("Method not implemented.");
  }
}

export class OTPService {
  generateOtp(slot: Slot) {
    throw new Error("Method not implemented.");
  }
  validateOtp() {
    throw new Error("Method not implemented.");
  }
}

export class NotificationService {
  notifyUser(buyer: Buyer, otp: void, slot: Slot): void {
    console.log(`Sending notification of otp: ${otp} to : ${buyer}`);
  }
}

export class DeliveryPersonService {
  getDeliveryPerson(slot: Slot): LockerUser {
    throw new Error("Method not implemented.");
  }
}
