import { DeleteUserProductCommand } from "../../../application/port/in/command/delete_user_product_command";
import { DeleteUserProductUseCase } from "../../../application/port/in/use_case/delete_user_product_use_case";
import {
  badRequest,
  noContent,
  ok,
  serverError,
} from "../../helpers/http_helper";
import { validateCommand } from "../../helpers/validate_command";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http_response";

export class DeleteUserProductController implements Controller {
  constructor(readonly deleteUserProductUseCase: DeleteUserProductUseCase) {}
  async run(
    request: DeleteUserProductController.Request
  ): Promise<HttpResponse> {
    try {
      const command = new DeleteUserProductCommand(
        request.gtin13,
        request.email
      );
      const validate = validateCommand(command);
      const deleteUser = this.deleteUserProductUseCase.deleteProduct(command);
      try {
        return await Promise.all([validate, deleteUser])
          .then((value) => ok(value))
          .catch((err: Error) => {
            return badRequest(err);
          });
      } catch (error) {
        return serverError(error);
      }
    } catch (error) {
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
