import { Gtin13 } from "./value_objects/gtin13";
import { Uuid } from "./value_objects/uuid";

export class Product {
  private _id: Uuid;
  private _name: string;
  private _description: string;
  private _gtin13: Gtin13;
  private _images: Array<string>;

  constructor(
    name: string,
    description: string,
    gtin13: string,
    images: Array<string>
  ) {
    this._id = Uuid.random();
    this._name = name;
    this._description = description;
    this._gtin13 = new Gtin13(gtin13);
    this._images = images;
  }

  get id() {
    return this._id;
  }

  get gtin13() {
    return this._gtin13.value;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get images() {
    return this._images;
  }

  set name(newName: string) {
    this._name = newName;
  }

  set description(newDescription) {
    this._description = newDescription;
  }

  set images(newImages: Array<string>) {
    this._images = newImages;
  }
}
