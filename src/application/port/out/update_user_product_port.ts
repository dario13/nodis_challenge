import { UserProduct } from "../../../domain/user_product";

export interface UpdateUserProductPort {
  updateUserProduct(userProduct: UserProduct): Promise<void>;
}
