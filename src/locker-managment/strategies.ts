interface IOtpGenerator {
  generateOTP();
}

class OTPGeneratorRandom implements IOtpGenerator {
  generateOTP() {
    throw new Error("Method not implemented.");
  }
}
