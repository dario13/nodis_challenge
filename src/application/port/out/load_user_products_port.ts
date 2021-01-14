import { UserProduct } from "../../../domain/user_product";

export interface LoadUserProductsPort {
  loadUserProducts(email: string): Array<UserProduct>;
}
