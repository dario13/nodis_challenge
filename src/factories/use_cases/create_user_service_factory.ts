import { CreateUserService } from "../../application/service/create_user_service";
import { mongoRepositoryFactory } from "../repositories/mongo_repository_factory";

export const createUserServiceFactory = (): CreateUserService => {
  return new CreateUserService(mongoRepositoryFactory, mongoRepositoryFactory);
};
