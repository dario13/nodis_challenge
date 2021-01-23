import * as faker from "faker";
import { UpdateUserProductCommand } from "../../application/port/in/command/update_user_product_command";
import { Gtin13Faker } from "./gtin13_faker";

export const updateUserProductRegistrationCommandMock = (
  ...options: Partial<UpdateUserProductCommand>[]
): UpdateUserProductCommand => {
  const defaults: UpdateUserProductCommand = {
    gtin13: Gtin13Faker.random(),
    email: faker.internet.email(),
    quantity: faker.random.number(),
    price: faker.random.number(),
  };
  return Object.assign({}, defaults, ...options);
};
