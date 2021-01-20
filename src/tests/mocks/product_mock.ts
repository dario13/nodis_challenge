import { Product } from "../../domain/product";
import * as faker from "faker";
import { gtin13Faker } from "./gtin13_faker";
import { Uuid } from "../../domain/value_objects/uuid";

export const productMock = (...options: Partial<Product>[]): Product => {
  const defaults: Product = {
    name: faker.commerce.productName(),
    description: faker.lorem.text(),
    gtin13: gtin13Faker,
    images: [faker.random.alpha(), faker.random.alpha()],
    id: Uuid.random(),
  };
  return Object.assign({}, defaults, ...options);
};
