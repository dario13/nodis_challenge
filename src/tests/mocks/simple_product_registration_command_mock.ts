import * as faker from "faker";
import { Gtin13Faker, gtin13Faker } from "./gtin13_faker";
import { SimpleProductRegistrationCommand } from "../../application/port/in/command/simple_product_registration_command";

export const simpleProductRegistrationCommandMock = (
  ...options: Partial<SimpleProductRegistrationCommand>[]
): SimpleProductRegistrationCommand => {
  const defaults: SimpleProductRegistrationCommand = {
    gtin13: Gtin13Faker.random(),
    email: faker.internet.email(),
    quantity: faker.random.number(),
    price: faker.random.number(),
  };
  return Object.assign({}, defaults, ...options);
};
