import { Status } from "../../domain/user_product";
import { UpdateUserProductCommand } from "../port/in/command/update_user_product_command";
import { UpdateUserProductUseCase } from "../port/in/use_case/update_user_product_use_case";
import { LoadUserProductPort } from "../port/out/load_user_product_port";
import { UpdateUserProductPort } from "../port/out/update_user_product_port";

export class UpdateUserProductService implements UpdateUserProductUseCase {
  constructor(
    readonly loadUserProductPort: LoadUserProductPort,
    readonly updateUserProductPort: UpdateUserProductPort
  ) {}
  async updateUserProduct(command: UpdateUserProductCommand): Promise<Status> {
    const userProduct = await this.loadUserProductPort.loadUserProduct(
      command.email,
      command.gtin13
    );
    userProduct.price = command.price;
    userProduct.quantity = command.quantity;
    await this.updateUserProductPort.updateUserProduct(userProduct);
    return "updated";
  }
}
