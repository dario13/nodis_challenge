import { InvalidArgument } from "../errors/invalid_argument";
import { ValueObject } from "./value_object";

export class Gtin13 implements ValueObject<string> {
  readonly type: string;

  constructor(readonly value: string) {
    this.ensureIsValidGtin13(value);

    this.value = value;
  }

  //This function calculates the 13th digit, whose name is checksum
  private calculateChecksum(idWithoutChecksum: string) {
    const idWithoutChecksumArray: Array<number> = idWithoutChecksum
      .split("")
      .reverse()
      .map((value) => +value);
    let checksum: number = idWithoutChecksumArray.reduce(
      (previousValue: number, currentValue: number, currentIndex: number) =>
        previousValue + currentValue * (3 - 2 * (currentIndex % 2)),
      0
    );
    checksum = (10 - (checksum % 10)) % 10;
    return checksum;
  }

  private ensureIsValidGtin13(id: string): void {
    //Check if they are only numbers
    const regExpOnlyNumbers = new RegExp(/^\d+$/);
    if (regExpOnlyNumbers.test(id) == false)
      throw new InvalidArgument("gtin13");

    //Check if the checksum is right
    const firstTwelveDigit: string = id.slice(0, 12);
    const thirteenDigit: number = +id.slice(12, 13);

    if (this.calculateChecksum(firstTwelveDigit) != thirteenDigit)
      throw new InvalidArgument("gtin13");
  }
}
