import { UpdateUserProductCommand } from "../command/update_user_product_command";
import { Status } from "../../../../domain/user_product";

export interface UpdateUserProductUseCase {
  updateUserProduct(command: UpdateUserProductCommand): Promise<Status>;
}
