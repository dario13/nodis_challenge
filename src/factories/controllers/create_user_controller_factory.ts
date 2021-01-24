import { Controller } from "../../adapters/protocols/controller";
import { CreateUserController } from "../../adapters/web/controllers/create_user_controller";
import { loggerFactory } from "../logger_factory";
import { createUserServiceFactory } from "../use_cases/create_user_service_factory";

export const createUserControllerFactory = (): Controller => {
  return new CreateUserController(createUserServiceFactory(), loggerFactory());
};
