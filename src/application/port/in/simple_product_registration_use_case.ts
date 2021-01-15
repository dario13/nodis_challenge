import { SimpleProductRegistrationCommand } from "./simple_product_registration_command";
import { Status } from "../../../domain/user_product";

export interface SimpleProductRegistrationUseCase {
  registerAproduct(command: SimpleProductRegistrationCommand): Status | Error;
}
