import { UpdateUserProductCommand } from "./update_user_product_command";

export interface UpdateUserProductUseCase {
  updateUserProduct(command: UpdateUserProductCommand): boolean;
}
