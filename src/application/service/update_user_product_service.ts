import { Status } from "../../domain/user_product";
import { UpdateUserProductCommand } from "../port/in/update_user_product_command";
import { UpdateUserProductUseCase } from "../port/in/update_user_product_use_case";
import { LoadUserProductPort } from "../port/out/load_user_product_port";
import { RegisterUserProductPort } from "../port/out/register_user_product_port";

export class UpdateUserProductService implements UpdateUserProductUseCase {
  constructor(
    readonly loadUserProductPort: LoadUserProductPort,
    readonly registerUserPort: RegisterUserProductPort
  ) {}
  async updateUserProduct(
    command: UpdateUserProductCommand
  ): Promise<Status | Error> {
    try {
      const product = await this.loadUserProductPort.loadUserProduct(
        command.email,
        command.gtin13
      );
      product.price = command.price;
      product.quantity = command.quantity;
      this.registerUserPort.registerUserProduct(product);
      return "updated";
    } catch (error) {
      return error;
    }
  }
}
