import { SimpleProductRegistrationCommand } from "./simple_product_registration_command";

export interface SimpleProductRegistrationUseCase {
  registerAproduct(command: SimpleProductRegistrationCommand): boolean;
}
