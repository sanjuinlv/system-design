class AccountNotExistsError extends Error {
  constructor(message) {
    super(message);
    this.name = "FundNotAvailableError";
  }
}

export default AccountNotExistsError;
