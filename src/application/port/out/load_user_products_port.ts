import { UserProduct } from "../../../domain/user_product";

export interface LoadUserProducts {
  loadUserProducts(email: string): Array<UserProduct>;
}
