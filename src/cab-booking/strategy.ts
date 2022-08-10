import { Cab, Rider } from "./models";

interface CabMatchingStrategy {
  matchCabToRider(
    rider: Rider,
    candidateCabs: Cab[],
    fromPoint: Location,
    toPoint: Location
  ): Cab;
}

class DefaultCabMatchingStrategy implements CabMatchingStrategy {
  matchCabToRider(
    rider: Rider,
    candidateCabs: Cab[],
    fromPoint: Location,
    toPoint: Location
  ): Cab {
    throw new Error("Method not implemented.");
  }
}

interface PricingStrategy {
  findPrice(formPoint: Location, toPoint: Location);
}

class DefaultPricingStrategy implements PricingStrategy {
  public static readonly PER_KM_RATE = 10;

  findPrice(formPoint: Location, toPoint: Location) {
    throw new Error("Method not implemented.");
  }
}
