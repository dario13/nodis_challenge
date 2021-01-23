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

export class RepositoryRejectedMock
  implements
    LoadProductPort,
    LoadUserPort,
    LoadUserProductPort,
    LoadUserProductsPort,
    RegisterProductPort,
    RegisterUserProductPort {
  constructor() {}

  async deleteUserProduct(userProduct: UserProduct): Promise<void> {
    return Promise.reject();
  }

  async loadProduct(gtin13: string, name?: string): Promise<Product> {
    return Promise.reject();
  }

  async loadUser(email: string): Promise<User> {
    return Promise.reject();
  }

  async createUser(user: User): Promise<void> {
    return Promise.reject();
  }

  async loadUserProduct(email: string, gtin13: string): Promise<UserProduct> {
    return Promise.reject();
  }

  async loadUserProducts(email: string): Promise<Array<UserProduct>> {
    return Promise.reject();
  }

  async registerProduct(product: Product): Promise<void> {
    return Promise.reject();
  }

  async registerUserProduct(userProduct: UserProduct): Promise<void> {
    return Promise.reject();
  }

  async updateUserProduct(userProduct: UserProduct): Promise<void> {
    return Promise.reject();
  }
}
