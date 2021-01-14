import { UserProduct } from "../../../domain/user_product";

export interface DeleteUserProductPort {
  deleteUserProduct(userProduct: UserProduct): void;
}
