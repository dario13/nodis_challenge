import { DeleteUserProductCommand } from "../../application/port/in/delete_user_product_command";
import { DeleteUserProductUseCase } from "../../application/port/in/delete_user_product_use_case";
import { badRequest, noContent, serverError } from "../helpers/http_helper";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http_response";

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
      const register = this.deleteUserProductUseCase.deleteProduct(command);
      if (register instanceof Error) return badRequest(register);
      return noContent();
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
