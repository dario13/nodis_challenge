import { UpdateUserProductCommand } from "../../../application/port/in/command/update_user_product_command";
import { UpdateUserProductUseCase } from "../../../application/port/in/use_case/update_user_product_use_case";
import {
  badRequest,
  noContent,
  ok,
  serverError,
} from "../../helpers/http_helper";
import { validateCommand } from "../../helpers/validate_command";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http_response";

export class UpdateUserProductController implements Controller {
  constructor(readonly updateUserProductUseCase: UpdateUserProductUseCase) {}

  async run(
    request: UpdateUserProductController.Request
  ): Promise<HttpResponse> {
    try {
      const command = new UpdateUserProductCommand(
        request.gtin13,
        request.email,
        request.quantity,
        request.price
      );
      const validate = validateCommand(command);
      const updateUser = this.updateUserProductUseCase.updateUserProduct(
        command
      );

      return await Promise.all([validate, updateUser])
        .then((value) => ok(value))
        .catch((err: Error) => {
          return badRequest(err);
        });
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace UpdateUserProductController {
  export type Request = {
    gtin13: string;
    email: string;
    quantity?: number;
    price?: number;
  };
}
