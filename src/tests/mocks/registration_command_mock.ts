import { Product } from "../../domain/product";
import * as faker from "faker";
import { gtin13Faker } from "./gtin13_faker";
import { SimpleProductRegistrationCommand } from "../../application/port/in/simple_product_registration_command";

export const registrationCommandMock = (
  ...options: Partial<SimpleProductRegistrationCommand>[]
): SimpleProductRegistrationCommand => {
  const defaults: SimpleProductRegistrationCommand = {
    gtin13: gtin13Faker,
    email: faker.internet.email(),
    quantity: faker.random.number(),
    price: faker.random.number(),
  };
  return Object.assign({}, defaults, ...options);
};