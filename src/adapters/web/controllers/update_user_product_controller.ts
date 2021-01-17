import { UpdateUserProductCommand } from "../../../application/port/in/update_user_product_command";
import { UpdateUserProductUseCase } from "../../../application/port/in/update_user_product_use_case";
import { badRequest, noContent, serverError } from "../../helpers/http_helper";
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
      const register = this.updateUserProductUseCase.updateUserProduct(command);
      if (register instanceof Error) return badRequest(register);
      return noContent();
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
