import { SimpleProductRegistrationCommand } from "../command/simple_product_registration_command";
import { Status } from "../../../../domain/user_product";

export interface SimpleProductRegistrationUseCase {
  registerAproduct(command: SimpleProductRegistrationCommand): Promise<Status>;
}
