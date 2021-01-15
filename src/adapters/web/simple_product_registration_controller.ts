import { SimpleProductRegistrationCommand } from "../../application/port/in/simple_product_registration_command";
import { SimpleProductRegistrationUseCase } from "../../application/port/in/simple_product_registration_use_case";
import { badRequest, ok, serverError } from "../helpers/http_helper";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http_response";

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
      const register = this.simpleProductRegistrationUseCase.registerAproduct(
        command
      );
      if (register instanceof Error) return badRequest(register);
      return ok("Created");
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
