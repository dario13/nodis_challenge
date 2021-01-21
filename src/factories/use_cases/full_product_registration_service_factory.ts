import { FullProductRegistrationService } from "../../application/service/full_product_registration_service";
import { mongoRepositoryFactory } from "../repositories/mongo_repository_factory";

export const fullProductRegistrationServiceFactory = (): FullProductRegistrationService => {
  return new FullProductRegistrationService(
    mongoRepositoryFactory,
    mongoRepositoryFactory,
    mongoRepositoryFactory,
    mongoRepositoryFactory
  );
};
