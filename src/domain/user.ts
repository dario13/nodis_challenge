import { Uuid } from "./value_objects/uuid";

export class User {
  private _id: Uuid;
  private _name: string;
  private _email: string;

  constructor(name: string, email: string) {
    this._id = Uuid.random();
    this._name = name;
    this._email = email;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  set name(newName) {
    this._name = newName;
  }

  set email(newEmail) {
    this._email = newEmail;
  }
}
