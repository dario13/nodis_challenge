import { Uuid } from "./value_objects/uuid";

export class User {
  constructor(
    readonly name: string,
    readonly email: string,
    readonly id?: Uuid
  ) {
    this.id = id || Uuid.random();
  }
}
