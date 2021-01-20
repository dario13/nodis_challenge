import * as faker from "faker";
import { UserProduct } from "../../domain/user_product";
import { userMock } from "./user_mock";
import { productMock } from "./product_mock";
import { User } from "../../domain/user";
import { Product } from "../../domain/product";

export const userProductMock = (user?: User, product?: Product) => {
  return new UserProduct(
    user || userMock(),
    product || productMock(),
    faker.random.number(),
    faker.random.number()
  );
};
