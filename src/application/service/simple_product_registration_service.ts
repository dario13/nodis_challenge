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

  async registerAproduct(
    command: SimpleProductRegistrationCommand
  ): Promise<Status> {
    return new Promise(async (resolve, reject) => {
      const productPromise = this.loadProductPort
        .loadProduct(command.gtin13)
        .then();

      const userPromise = this.loadUserPort.loadUser(command.email).then();

      return Promise.all([productPromise, userPromise])
        .then(async ([product, user]) => {
          const userProduct = new UserProduct(
            user,
            product,
            command.price,
            command.quantity
          );
          this.registerUserProductPort
            .registerUserProduct(userProduct)
            .then()
            .catch();
          return resolve("created" as Status);
        })
        .catch((error) => {
          console.log("Entré con error", error);
          reject(error);
        });
    });
  }
}
