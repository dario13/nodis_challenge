const Ean = require("ean-generator");

export const gtin13Faker = "7890920182138";

export class Gtin13Faker {
  static random() {
    return new Ean(["789"]).create();
  }
}
