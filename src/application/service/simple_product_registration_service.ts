import { Status, UserProduct } from "../../domain/user_product";
import { SimpleProductRegistrationCommand } from "../port/in/command/simple_product_registration_command";
import { SimpleProductRegistrationUseCase } from "../port/in/query/simple_product_registration_use_case";
import { LoadProductPort } from "../port/out/load_product_port";
import { LoadUserPort } from "../port/out/load_user_port";
import { RegisterUserProductPort } from "../port/out/register_user_product_port";

export class SimpleProductRegistrationService
  implements SimpleProductRegistrationUseCase {
  constructor(
    readonly loadProductPort: LoadProductPort,
    readonly loadUserPort: LoadUserPort,
    readonly registerUserProductPort: RegisterUserProductPort
  ) {}

  async registerAproduct(
    command: SimpleProductRegistrationCommand
  ): Promise<Status> {
    const product = await this.loadProductPort
      .loadProduct(command.gtin13)
      .then();

    const user = await this.loadUserPort.loadUser(command.email).then();

    const userProduct = new UserProduct(
      user,
      product,
      command.price,
      command.quantity
    );
    await this.registerUserProductPort.registerUserProduct(userProduct).then();
    return "created" as Status;
  }
}
