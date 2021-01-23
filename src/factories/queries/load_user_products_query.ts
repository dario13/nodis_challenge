import { LoadUserProductsService } from "../../application/service/load_user_products_service";
import { mongoRepositoryFactory } from "../repositories/mongo_repository_factory";

export const loadUserProductsQueryFactory = (): LoadUserProductsService => {
  return new LoadUserProductsService(
    mongoRepositoryFactory,
    mongoRepositoryFactory
  );
};
