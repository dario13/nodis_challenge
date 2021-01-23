import { UserProduct } from "../../../domain/user_product";

export interface LoadUserProductPort {
  loadUserProduct(email: string, gtin13: string): Promise<UserProduct>;
}
