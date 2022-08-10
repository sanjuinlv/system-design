abstract class CommandExecutor {
  protected parkingLotService: ParkingLotService;
  protected outputPrinter: OutputPrinter;

  constructor(
    parkingLotService: ParkingLotService,
    outputPrinter: OutputPrinter
  ) {
    this.parkingLotService = parkingLotService;
    this.outputPrinter = outputPrinter;
  }

  public abstract execute(command: Command): void;
  public abstract validate(command: Command): boolean;
}

class CreateParkingLotCommandExecutor extends CommandExecutor {
  public static COMMAND_NAME = "create_parking_lot";

  constructor(
    parkingLotService: ParkingLotService,
    outputPrinter: OutputPrinter
  ) {
    super(parkingLotService, outputPrinter);
  }

  public execute(command: Command): void {
    const parkingLotCapacity = parseInt(command.getParams()[0]);
    const parkingLot = new ParkingLot(parkingLotCapacity);
    this.parkingLotService.createParkingLot(
      parkingLot,
      new NaturalOrderingParkingStrategy()
    );
    this.outputPrinter.printWithNewLine(
      "Created a parking lot with " + parkingLot.getCapacity() + " slots"
    );
  }

  public validate(command: Command): boolean {
    const params = command.getParams();
    if (params.length !== 1) return false;
    return IntegerValidator.isInteger(params[0]);
  }
}

class IntegerValidator {
  static isInteger(arg0: string): boolean {
    throw new Error("Method not implemented.");
  }
}
class OutputPrinter {
  printWithNewLine(arg0: string) {
    throw new Error("Method not implemented.");
  }
}
