import { Product } from "../../domain/product";
import { UserProduct } from "../../domain/user_product";
import { FullProductRegistrationCommand } from "../port/in/full_product_registration_command";
import { FullProductRegistrationUseCase } from "../port/in/full_product_registration_use_case";
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

  registerAproduct(command: FullProductRegistrationCommand): boolean {
    this.searchIfProductExists(command.gtin13, command.name);

    const user = this.loadUserPort.loadUser(command.email);
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
    this.registerProductPort.registerProduct(product);
    this.registerUserProductPort.registerUserProduct(userProduct);
    return true;
  }

  searchIfProductExists(gtin13: string, name: string) {
    if (this.loadProductPort.loadProduct(gtin13, name))
      throw new Error(
        "The product cannot have the same gtin 13 or name as another that already exists"
      );
  }
}
