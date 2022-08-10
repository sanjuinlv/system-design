import { CabManager, TripManager } from "./database";

class CabController {
  private cabManager: CabManager;
  private tripManager: TripManager;

  public registerCab() {}
  public updateCabLocation() {}
  public updateCabAvailability() {}
  public endTrip() {}
}

class RidersController {
  private cabManager: CabManager;
  private tripManager: TripManager;

  constructor(cabManager: CabManager, tripManager: TripManager) {
    this.cabManager = cabManager;
    this.tripManager = tripManager;
  }

  public registerRider() {}
  public bookRide() {}
  public fetchHistory() {}
}
