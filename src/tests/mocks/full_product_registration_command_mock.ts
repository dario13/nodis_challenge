import * as faker from "faker";
import { FullProductRegistrationCommand } from "../../application/port/in/command/full_product_registration_command";
import { gtin13Faker } from "./gtin13_faker";

export const fullProductRegistrationCommandMock = (
  ...options: Partial<FullProductRegistrationCommand>[]
): FullProductRegistrationCommand => {
  const defaults: FullProductRegistrationCommand = {
    gtin13: gtin13Faker,
    email: faker.internet.email(),
    quantity: faker.random.number(),
    price: faker.random.number(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    images: ["url1", "url2", "url3"],
  };
  return Object.assign({}, defaults, ...options);
};
