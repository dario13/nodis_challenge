import { DeleteUserProductCommand } from "../port/in/command/delete_user_product_command";
import { DeleteUserProductUseCase } from "../port/in/use_case/delete_user_product_use_case";
import { LoadUserProductPort } from "../port/out/load_user_product_port";
import { Status } from "../../domain/user_product";
import { UpdateUserProductPort } from "../port/out/update_user_product_port";

export class DeleteUserProductService implements DeleteUserProductUseCase {
  constructor(
    readonly userProductPort: LoadUserProductPort,
    readonly updateUserProductPort: UpdateUserProductPort
  ) {}

  async deleteProduct(command: DeleteUserProductCommand): Promise<Status> {
    const userProduct = await this.userProductPort.loadUserProduct(
      command.email,
      command.gtin13
    );
    userProduct.delete();
    await this.updateUserProductPort.updateUserProduct(userProduct);
    return "deleted";
  }
}
