import { CreateUserCommand } from "../../../application/port/in/command/create_user_command";
import { CreateUserUseCase } from "../../../application/port/in/use_case/create_user_use_case";
import { badRequest, ok, serverError } from "../../helpers/http_helper";
import { validateCommand } from "../../helpers/validate_command";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http_response";

export class CreateUserController implements Controller {
  constructor(readonly createUserProductUseCase: CreateUserUseCase) {}
  async run(request: CreateUserController.Request): Promise<HttpResponse> {
    try {
      const command = new CreateUserCommand(request.email, request.name);
      try {
        await validateCommand(command).then();
        const createUser = await this.createUserProductUseCase.createUser(
          command
        );

        return ok(createUser);
      } catch (error) {
        return badRequest(error);
      }
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace CreateUserController {
  export type Request = {
    email: string;
    name: string;
  };
}
