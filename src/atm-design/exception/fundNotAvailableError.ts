class FundNotAvailableError extends Error {
  constructor(message) {
    super(message);
    this.name = "FundNotAvailableError";
  }
}

export default FundNotAvailableError;
