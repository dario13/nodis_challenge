import { Status } from "../../../../domain/user_product";
import { CreateUserCommand } from "../command/create_user_command";

export interface CreateUserUseCase {
  createUser(command: CreateUserCommand): Promise<Status>;
}
