import { Uuid } from "./value_objects/uuid";

export class User {
  constructor(
    readonly name: string,
    readonly email: string,
    readonly id?: string
  ) {
    this.id = id || Uuid.random().value!;
  }
}
