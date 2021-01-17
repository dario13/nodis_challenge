import { FullProductRegistrationCommand } from "./full_product_registration_command";
import { Status } from "../../../domain/user_product";

export interface FullProductRegistrationUseCase {
  registerAproduct(
    command: FullProductRegistrationCommand
  ): Promise<Status | Error>;
}
