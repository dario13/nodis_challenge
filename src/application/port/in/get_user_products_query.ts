import { UserProduct } from "../../../domain/user_product";

export interface GetUserProducstQuery {
  getUserProducts(email: string): Array<UserProduct>;
}
