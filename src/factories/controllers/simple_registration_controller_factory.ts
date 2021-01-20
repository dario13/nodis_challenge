import { Controller } from "../../adapters/protocols/controller";
import { SimpleProductRegistrationController } from "../../adapters/web/controllers/simple_product_registration_controller";
import { simpleRegistrationUseCaseFactory } from "../use_cases/simple_registration_service_factory";

export const simpleRegistrationControllerFactory = (): Controller => {
  return new SimpleProductRegistrationController(
    simpleRegistrationUseCaseFactory()
  );
};
