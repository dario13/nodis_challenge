import { UserProduct } from "../../../domain/user_product";
import { deleteProductCommand } from "./delete_product_command";

export interface deleteProductUseCase {
  deleteProduct(command: deleteProductCommand): boolean;
}
