import { Buyer, Locker, LockerItem, Slot } from "./models";
import {
  DeliveryPersonService,
  LockerService,
  NotificationService,
  OTPService,
} from "./services";

class LockerController {
  private lockerService: LockerService;
  private otpService: OTPService;

  public createLocker(locker: Locker): Locker {
    return this.lockerService.createLocker(locker);
  }
  public createSlot(slot: Slot): Slot {
    return this.lockerService.createSlot(slot);
  }

  public getAvailableSlots(): Slot[] {
    return this.lockerService.getAllAvailableSlots();
  }

  public unlockSlot(slot: Slot, otp: string): boolean {
    this.otpService.validateOtp();
    //post OTP validation open the slot
    return true;
  }

  public deallocateSlow(slot: Slot): boolean {
    return this.lockerService.deallocateSlot(slot);
  }
}

class OrderController {
  private readonly lockerService: LockerService;
  private readonly otpService: OTPService;
  private readonly notificationService: NotificationService;

  constructor(
    lockerService: LockerService,
    otpService: OTPService,
    notificationService: NotificationService
  ) {
    this.lockerService = lockerService;
    this.otpService = otpService;
    this.notificationService = notificationService;
  }

  allocateLocker(buyer: Buyer, lockerItem: LockerItem): Slot {
    const slot = this.lockerService.allocateSlot(lockerItem);
    const otp = this.otpService.generateOtp(slot);
    this.notificationService.notifyUser(buyer, otp, slot);
    return slot;
  }
}

class ReturnController {
  private readonly lockerService: LockerService;
  private readonly otpService: OTPService;
  private readonly notificationService: NotificationService;
  private readonly deliveryPersonService: DeliveryPersonService;
  constructor(
    lockerService: LockerService,
    otpService: OTPService,
    notificationService: NotificationService,
    deliveryPersonService: DeliveryPersonService
  ) {
    this.lockerService = lockerService;
    this.otpService = otpService;
    this.notificationService = notificationService;
    this.deliveryPersonService = deliveryPersonService;
  }

  allocateLocker(buyer: Buyer, lockerItem: LockerItem): Slot {
    const slot = this.lockerService.allocateSlot(lockerItem);
    const otp = this.otpService.generateOtp(slot);
    const deliverPerson = this.deliveryPersonService.getDeliveryPerson(slot);
    this.notificationService.notifyUser(deliverPerson, otp, slot);
    return slot;
  }
}
