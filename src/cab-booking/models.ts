class Cab {
  private id: string;
  private driverName: string;
  private isAvailable: boolean;
}

class Rider {
  private id: string;
  private name: string;
}

class Location {
  private readonly x: number;
  private readonly y: number;
}

class Trip {
  private rider: Rider;
  private cab: Cab;
  private fromPoint: Location;
  private toPoint: Location;
  private tipStatus: TripStatus;
  private price: number;
}

enum TripStatus {
  IN_PROGRESS,
  FINISHED,
}

export { Cab, Rider, Location, Trip };
