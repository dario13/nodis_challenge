import { DeleteUserProductCommand } from "./delete_user_product_command";
import { Status } from "../../../domain/user_product";

export interface DeleteUserProductUseCase {
  deleteProduct(command: DeleteUserProductCommand): Promise<Status | Error>;
}
