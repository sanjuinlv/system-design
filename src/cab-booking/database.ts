import { Cab, Location, Rider, Trip } from "./models";

class CabManager {
  private cabs: Map<string, Cab>;
  public createCab(newCab: Cab) {}
  public getCab(cabId: string) {}
  public updateCabLocation(cabId: string, newLocation: Location) {}
  public updateCabAvailability(cabId: string, newAvailability: boolean) {}
  public getCabs(fromPoint: Location, distance: number) {}
}

class RiderManager {
  private riders: Map<string, Rider>;
  public createRider(newRider: Rider) {}
  public getRider(riderId: string) {}
}

class TripManager {
  public static readonly MAX_ALLOWED_TRIP_MATCHING_DISTANCE = 10;
  private trips: Map<string, Array<Trip>>;
  private cabManager: CabManager;
  private riderManager: RiderManager;
  private cabMatchingStrategy: CabMatchingStrategy;
  private pricingStrategy: PricingStrategy;

  public createTrip(rider: Rider, fromPoint: Location, toPoint: Location) {}
  public tripHistory(rider: Rider) {}
  public endTrip(cab: Cab) {}
}

export { CabManager, RiderManager, TripManager };
