import { UserProduct } from "../../domain/user_product";
import { LoadUserProducstQuery } from "../port/in/load_user_products_query";
import { LoadUserPort } from "../port/out/load_user_port";
import { LoadUserProductsPort } from "../port/out/load_user_products_port";

export class GetUserProductsService implements LoadUserProducstQuery {
  constructor(
    readonly loadUserPort: LoadUserPort,
    readonly loadUserProductsPort: LoadUserProductsPort
  ) {}

  async getUserProducts(email: string): Promise<Array<UserProduct>> {
    const user = await this.loadUserPort.loadUser(email);
    const userProducts = await this.loadUserProductsPort.loadUserProducts(
      user.email
    );
    return userProducts;
  }
}
