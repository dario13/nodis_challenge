import { User } from "../../domain/user";
import { Status } from "../../domain/user_product";
import { CreateUserCommand } from "../port/in/command/create_user_command";
import { CreateUserUseCase } from "../port/in/use_case/create_user_use_case";
import { CreateUserPort } from "../port/out/create_user_port";
import { LoadUserPort } from "../port/out/load_user_port";

export class CreateUserService implements CreateUserUseCase {
  constructor(
    readonly loadUserPort: LoadUserPort,
    readonly createUserPort: CreateUserPort
  ) {}
  async createUser(command: CreateUserCommand): Promise<Status> {
    if (!(await this.checkIfUserAlreadyExists(command.email))) {
      const user = new User(command.name, command.email);
      await this.createUserPort.createUser(user);
      return "created";
    }

    throw Error("The user to register already exists");
  }

  //if loadUser return a throw is because the user
  //was not found and then doesn't exists
  private async checkIfUserAlreadyExists(email: string): Promise<boolean> {
    try {
      await this.loadUserPort.loadUser(email);
      return true;
    } catch (error) {
      return false;
    }
  }
}
