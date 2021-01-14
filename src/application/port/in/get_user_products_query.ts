import { Product } from "../../../domain/product";
import { UserProduct } from "../../../domain/user_product";

export interface getUserProducstQuery {
  getUserProducts(email: string): Array<UserProduct>;
}
