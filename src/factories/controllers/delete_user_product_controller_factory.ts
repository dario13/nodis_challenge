import { Controller } from "../../adapters/protocols/controller";
import { DeleteUserProductController } from "../../adapters/web/controllers/delete_user_product_controller";
import { deleteUserProductServiceFactory } from "../use_cases/delete_user_product_service_factory";

export const deleteUserProductControllerFactory = (): Controller => {
  return new DeleteUserProductController(deleteUserProductServiceFactory());
};
