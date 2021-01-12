import { v4 as uuid, validate as uuidValidate } from "uuid";
import { InvalidArgument } from "../exceptions/invalid_argument";

export class Uuid {
  readonly value: string;

  constructor(value: string) {
    this.ensureIsValidUuid(value);

    this.value = value;
  }

  static random(): Uuid {
    return new Uuid(uuid());
  }

  private ensureIsValidUuid(id: string): void {
    if (!uuidValidate(id)) {
      throw new InvalidArgument("id")
    }
  }

}