import { SimpleProductRegistrationCommand } from "../../../application/port/in/simple_product_registration_command";
import { SimpleProductRegistrationUseCase } from "../../../application/port/in/simple_product_registration_use_case";
import { badRequest, ok, serverError } from "../../helpers/http_helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http_response";
import { validateCommand } from "../../helpers/validate_command";

export class SimpleProductRegistrationController implements Controller {
  constructor(
    readonly simpleProductRegistrationUseCase: SimpleProductRegistrationUseCase
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
      const validate = validateCommand(command);
      const productRegistration = this.simpleProductRegistrationUseCase.registerAproduct(
        command
      );

      return await Promise.all([validate, productRegistration])
        .then((value) => ok(value))
        .catch((error) => {
          return badRequest(error);
        });
    } catch (error) {
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