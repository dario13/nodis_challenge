import { mongoRepositoryFactory } from "../repositories/mongo_repository_factory";
import { LoadUserProductsService } from "../../application/service/load_user_products_service";

export const loadUserProductServiceFactory = (): LoadUserProductsService => {
  return new LoadUserProductsService(
    mongoRepositoryFactory,
    mongoRepositoryFactory
  );
};
