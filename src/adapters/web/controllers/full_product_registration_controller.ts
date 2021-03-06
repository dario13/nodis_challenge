import { FullProductRegistrationCommand } from "../../../application/port/in/command/full_product_registration_command";
import { FullProductRegistrationUseCase } from "../../../application/port/in/use_case/full_product_registration_use_case";
import { badRequest, ok, serverError } from "../../helpers/http_helper";
import { validateCommand } from "../../helpers/validate_command";
import { Logger } from "../../persistence/logger/logger";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http_response";

export class FullProductRegistrationController implements Controller {
  constructor(
    readonly fullProductRegistrationController: FullProductRegistrationUseCase,
    readonly logger: Logger
  ) {}

  async run(
    request: FullProductRegistrationController.Request
  ): Promise<HttpResponse> {
    try {
      const command = new FullProductRegistrationCommand(
        request.gtin13,
        request.email,
        request.quantity,
        request.price,
        request.name,
        request.description,
        request.images
      );
      try {
        await validateCommand(command);
        const productRegistration = await this.fullProductRegistrationController.registerAproduct(
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

export namespace FullProductRegistrationController {
  export type Request = {
    gtin13: string;
    email: string;
    quantity: number;
    price: number;
    name: string;
    description: string;
    images: Array<string>;
  };
}
