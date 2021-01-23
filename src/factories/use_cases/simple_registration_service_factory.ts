import { SimpleProductRegistrationService } from "../../application/service/simple_product_registration_service";
import { mongoRepositoryFactory } from "../repositories/mongo_repository_factory";

export const simpleRegistrationUseCaseFactory = (): SimpleProductRegistrationService => {
  return new SimpleProductRegistrationService(
    mongoRepositoryFactory,
    mongoRepositoryFactory,
    mongoRepositoryFactory,
    mongoRepositoryFactory
  );
};
