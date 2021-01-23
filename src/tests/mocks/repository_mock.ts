import { LoadProductPort } from "../../application/port/out/load_product_port";
import { LoadUserPort } from "../../application/port/out/load_user_port";
import { LoadUserProductsPort } from "../../application/port/out/load_user_products_port";
import { LoadUserProductPort } from "../../application/port/out/load_user_product_port";
import { RegisterProductPort } from "../../application/port/out/register_product_port";
import { RegisterUserProductPort } from "../../application/port/out/register_user_product_port";
import { Product } from "../../domain/product";
import { User } from "../../domain/user";
import { UserProduct } from "../../domain/user_product";
import { productMock } from "./product_mock";
import { userMock } from "./user_mock";
import { userProductMock } from "./user_product_mock";

export class RepositoryMock
  implements
    LoadProductPort,
    LoadUserPort,
    LoadUserProductPort,
    LoadUserProductsPort,
    RegisterProductPort,
    RegisterUserProductPort {
  constructor() {}

  async deleteUserProduct(userProduct: UserProduct): Promise<void> {
    return Promise.resolve();
  }

  async loadProduct(gtin13: string, name?: string): Promise<Product> {
    return productMock({ gtin13, name });
  }

  async loadUser(email: string): Promise<User> {
    return userMock({ email });
  }

  async createUser(user: User): Promise<void> {
    return Promise.resolve();
  }

  async loadUserProduct(email: string, gtin13: string): Promise<UserProduct> {
    const user = userMock({ email });
    const product = productMock({ gtin13 });
    return userProductMock(user, product);
  }

  async loadUserProducts(email: string): Promise<Array<UserProduct>> {
    const user = userMock({ email });
    const userProduct1 = userProductMock(user);
    const userProduct2 = userProductMock(user);
    return [userProduct1, userProduct2];
  }

  async registerProduct(product: Product): Promise<void> {
    return Promise.resolve();
  }

  async registerUserProduct(userProduct: UserProduct): Promise<void> {
    return Promise.resolve();
  }

  async updateUserProduct(userProduct: UserProduct): Promise<void> {
    return Promise.resolve();
  }
}
