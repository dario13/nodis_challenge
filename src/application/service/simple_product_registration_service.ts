import { Status, UserProduct } from "../../domain/user_product";
import { SimpleProductRegistrationCommand } from "../port/in/simple_product_registration_command";
import { SimpleProductRegistrationUseCase } from "../port/in/simple_product_registration_use_case";
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

  registerAproduct(command: SimpleProductRegistrationCommand) {
    try {
      const product = this.loadProductPort.loadProduct(command.gtin13);
      const user = this.loadUserPort.loadUser(command.email);

      const userProduct = new UserProduct(
        user,
        product,
        command.price,
        command.quantity
      );
      this.registerUserProductPort.registerUserProduct(userProduct);
      return "created";
    } catch (error) {
      return error;
    }
  }
}
