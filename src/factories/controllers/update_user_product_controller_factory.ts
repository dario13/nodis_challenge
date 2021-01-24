import { Controller } from "../../adapters/protocols/controller";
import { UpdateUserProductController } from "../../adapters/web/controllers/update_user_product_controller";
import { loggerFactory } from "../logger_factory";
import { updateUserProductServiceFactory } from "../use_cases/update_user_product_service_factory";

export const updateUserProductControllerFactory = (): Controller => {
  return new UpdateUserProductController(
    updateUserProductServiceFactory(),
    loggerFactory()
  );
};
