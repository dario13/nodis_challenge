import { UpdateUserProductService } from "../../application/service/update_user_product_service";
import { mongoRepositoryFactory } from "../repositories/mongo_repository_factory";

export const updateUserProductServiceFactory = (): UpdateUserProductService => {
  return new UpdateUserProductService(
    mongoRepositoryFactory,
    mongoRepositoryFactory
  );
};
