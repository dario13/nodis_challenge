import { UpdateUserProductCommand } from "../../../application/port/in/command/update_user_product_command";
import { UpdateUserProductUseCase } from "../../../application/port/in/use_case/update_user_product_use_case";
import { badRequest, ok, serverError } from "../../helpers/http_helper";
import { validateCommand } from "../../helpers/validate_command";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http_response";
import { Logger } from "../../persistence/logger/logger";

export class UpdateUserProductController implements Controller {
  constructor(
    readonly updateUserProductUseCase: UpdateUserProductUseCase,
    readonly logger: Logger
  ) {}

  async run(
    request: UpdateUserProductController.Request
  ): Promise<HttpResponse> {
    try {
      const command = new UpdateUserProductCommand(
        request.gtin13,
        request.email,
        request.price,
        request.quantity
      );
      try {
        await validateCommand(command).then();
        const updateUser = await this.updateUserProductUseCase.updateUserProduct(
          command
        );

        return ok(updateUser);
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

export namespace UpdateUserProductController {
  export type Request = {
    gtin13: string;
    email: string;
    quantity?: number;
    price?: number;
  };
}
