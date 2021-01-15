import { UserProduct } from "../../../domain/user_product";

export interface LoadUserProducstQuery {
  getUserProducts(email: string): Array<UserProduct>;
}
