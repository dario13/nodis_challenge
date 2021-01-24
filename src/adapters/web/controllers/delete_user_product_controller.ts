import { DeleteUserProductCommand } from "../../../application/port/in/command/delete_user_product_command";
import { DeleteUserProductUseCase } from "../../../application/port/in/use_case/delete_user_product_use_case";
import { badRequest, ok, serverError } from "../../helpers/http_helper";
import { validateCommand } from "../../helpers/validate_command";
import { Logger } from "../../persistence/logger/logger";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http_response";

export class DeleteUserProductController implements Controller {
  constructor(
    readonly deleteUserProductUseCase: DeleteUserProductUseCase,
    readonly logger: Logger
  ) {}
  async run(
    request: DeleteUserProductController.Request
  ): Promise<HttpResponse> {
    try {
      const command = new DeleteUserProductCommand(
        request.gtin13,
        request.email
      );
      try {
        await validateCommand(command).then();
        const deleteUser = await this.deleteUserProductUseCase.deleteProduct(
          command
        );

        return ok(deleteUser);
      } catch (error) {
        this.logger.error(error);
        return badRequest(error);
      }
    } catch (error) {
      this.logger.error(error);
      return serverError(error);
    }
  }
}

export namespace DeleteUserProductController {
  export type Request = {
    gtin13: string;
    email: string;
  };
}
