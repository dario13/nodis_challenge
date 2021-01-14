import { FullProductRegistrationCommand } from "./full_product_registration_command";

export interface FullProductRegistrationUseCase {
  registerAproduct(command: FullProductRegistrationCommand): boolean;
}
