import { Product } from "../../domain/product";
import { Status, UserProduct } from "../../domain/user_product";
import { FullProductRegistrationCommand } from "../port/in/command/full_product_registration_command";
import { FullProductRegistrationUseCase } from "../port/in/use_case/full_product_registration_use_case";
import { LoadProductPort } from "../port/out/load_product_port";
import { LoadUserPort } from "../port/out/load_user_port";
import { RegisterProductPort } from "../port/out/register_product_port";
import { RegisterUserProductPort } from "../port/out/register_user_product_port";

export class FullProductRegistrationService
  implements FullProductRegistrationUseCase {
  constructor(
    readonly loadUserPort: LoadUserPort,
    readonly loadProductPort: LoadProductPort,
    readonly registerUserProductPort: RegisterUserProductPort,
    readonly registerProductPort: RegisterProductPort
  ) {}

  async registerAproduct(
    command: FullProductRegistrationCommand
  ): Promise<Status> {
    if (!(await this.searchIfProductExists(command.gtin13, command.name))) {
      const user = await this.loadUserPort.loadUser(command.email);
      const product = new Product(
        command.name,
        command.description,
        command.gtin13,
        command.images
      );
      const userProduct = new UserProduct(
        user,
        product,
        command.price,
        command.quantity
      );
      await this.registerProductPort.registerProduct(product);
      await this.registerUserProductPort.registerUserProduct(userProduct);
      return "created";
    }
    throw Error(
      "The product to be registered cannot be the same as an existing one"
    );
  }

  //if loadProduct return a throw is because the product
  //was not found and the products doesn't exists
  private async searchIfProductExists(
    gtin13: string,
    name: string
  ): Promise<boolean> {
    try {
      await this.loadProductPort.loadProduct(gtin13, name);
      return true;
    } catch (error) {
      return false;
    }
  }
}
