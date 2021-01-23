import { Controller } from "../../adapters/protocols/controller";
import { FullProductRegistrationController } from "../../adapters/web/controllers/full_product_registration_controller";
import { fullProductRegistrationServiceFactory } from "../use_cases/full_product_registration_service_factory";

export const fullProductRegistrationControllerFactory = (): Controller => {
  return new FullProductRegistrationController(
    fullProductRegistrationServiceFactory()
  );
};
