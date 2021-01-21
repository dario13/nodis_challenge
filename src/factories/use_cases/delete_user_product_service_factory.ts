import { DeleteUserProductService } from "../../application/service/delete_user_product_service";
import { mongoRepositoryFactory } from "../repositories/mongo_repository_factory";

export const deleteUserProductServiceFactory = (): DeleteUserProductService => {
  return new DeleteUserProductService(
    mongoRepositoryFactory,
    mongoRepositoryFactory
  );
};
