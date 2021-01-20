import { Gtin13 } from "./value_objects/gtin13";
import { Uuid } from "./value_objects/uuid";

export class Product {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly gtin13: string,
    readonly images: Array<string>,
    readonly id?: Uuid
  ) {
    this.id = id || Uuid.random();
    this.gtin13 = new Gtin13(gtin13).value;
  }
}
