import { deleteProductCommand } from "../port/in/delete_product_command";
import { deleteProductUseCase } from "../port/in/delete_product_use_case";
import { LoadUserProductPort } from "../port/out/load_user_product_port";
import { DeleteUserProductPort } from "../port/out/delete_user_product_port";

export class DeleteUserProductService implements deleteProductUseCase {
  constructor(
    readonly userProductPort: LoadUserProductPort,
    readonly deleteUserProductPort: DeleteUserProductPort
  ) {}

  deleteProduct(command: deleteProductCommand): boolean {
    const userProduct = this.userProductPort.loadUserProduct(
      command.email,
      command.gtin13
    );
    userProduct.delete();
    this.deleteUserProductPort.deleteUserProduct(userProduct);
    return true;
  }
}
