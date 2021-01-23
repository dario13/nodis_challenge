import * as faker from "faker";
import { DeleteUserProductCommand } from "../../application/port/in/command/delete_user_product_command";
import { Gtin13Faker } from "./gtin13_faker";

export const deleteUserProductCommandMock = (
  ...options: Partial<DeleteUserProductCommand>[]
): DeleteUserProductCommand => {
  const defaults: DeleteUserProductCommand = {
    gtin13: Gtin13Faker.random(),
    email: faker.internet.email(),
  };
  return Object.assign({}, defaults, ...options);
};
