import { UserProduct } from "../../../domain/user_product";

export interface RegisterUserProductPort {
  registerUserProduct(userProduct: UserProduct): void;
}
