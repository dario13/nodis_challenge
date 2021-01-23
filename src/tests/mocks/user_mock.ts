import * as faker from "faker";
import { Uuid } from "../../domain/value_objects/uuid";
import { User } from "../../domain/user";

export const userMock = (...options: Partial<User>[]): User => {
  const defaults: User = {
    name: faker.commerce.productName(),
    email: faker.internet.email(),
    id: Uuid.random().value,
  };
  return Object.assign({}, defaults, ...options);
};
