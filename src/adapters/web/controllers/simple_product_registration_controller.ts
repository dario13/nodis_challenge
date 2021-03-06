import { SimpleProductRegistrationCommand } from "../../../application/port/in/command/simple_product_registration_command";
import { SimpleProductRegistrationUseCase } from "../../../application/port/in/use_case/simple_product_registration_use_case";
import { badRequest, ok, serverError } from "../../helpers/http_helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http_response";
import { validateCommand } from "../../helpers/validate_command";
import { Logger } from "../../persistence/logger/logger";

export class SimpleProductRegistrationController implements Controller {
  constructor(
    readonly simpleProductRegistrationUseCase: SimpleProductRegistrationUseCase,
    readonly logger: Logger
  ) {}

  async run(
    request: SimpleProductRegistrationController.Request
  ): Promise<HttpResponse> {
    try {
      const command = new SimpleProductRegistrationCommand(
        request.gtin13,
        request.email,
        request.quantity,
        request.price
      );
      try {
        await validateCommand(command).then();
        const productRegistration = await this.simpleProductRegistrationUseCase.registerAproduct(
          command
        );

        return ok(productRegistration);
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

export namespace SimpleProductRegistrationController {
  export type Request = {
    gtin13: string;
    email: string;
    quantity: number;
    price: number;
  };
}
