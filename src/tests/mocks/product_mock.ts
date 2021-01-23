import { Product } from "../../domain/product";
import * as faker from "faker";
import { Gtin13Faker } from "./gtin13_faker";
import { Uuid } from "../../domain/value_objects/uuid";

export const productMock = (...options: Partial<Product>[]): Product => {
  const defaults: Product = {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    gtin13: Gtin13Faker.random(),
    images: [faker.random.alpha(), faker.random.alpha()],
    id: Uuid.random().value,
  };
  return Object.assign({}, defaults, ...options);
};
