import { DeleteUserProductCommand } from "../port/in/command/delete_user_product_command";
import { DeleteUserProductUseCase } from "../port/in/use_case/delete_user_product_use_case";
import { LoadUserProductPort } from "../port/out/load_user_product_port";
import { DeleteUserProductPort } from "../port/out/delete_user_product_port";
import { Status } from "../../domain/user_product";

export class DeleteUserProductService implements DeleteUserProductUseCase {
  constructor(
    readonly userProductPort: LoadUserProductPort,
    readonly deleteUserProductPort: DeleteUserProductPort
  ) {}

  async deleteProduct(command: DeleteUserProductCommand): Promise<Status> {
    try {
      const userProduct = await this.userProductPort.loadUserProduct(
        command.email,
        command.gtin13
      );
      userProduct.delete();
      await this.deleteUserProductPort.deleteUserProduct(userProduct);
      return "deleted";
    } catch (error) {
      return error;
    }
  }
}
