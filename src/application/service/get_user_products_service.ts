import { UserProduct } from "../../domain/user_product";
import { GetUserProducstQuery } from "../port/in/get_user_products_query";
import { LoadUserPort } from "../port/out/load_user_port";
import { LoadUserProductsPort } from "../port/out/load_user_products_port";

export class GetUserProductsService implements GetUserProducstQuery {
  constructor(
    readonly loadUserPort: LoadUserPort,
    readonly loadUserProductsPort: LoadUserProductsPort
  ) {}

  getUserProducts(email: string): Array<UserProduct> {
    const user = this.loadUserPort.loadUser(email);
    const userProducts = this.loadUserProductsPort.loadUserProducts(user.email);
    return userProducts;
  }
}
