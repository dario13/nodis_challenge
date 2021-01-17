import { FullProductRegistrationCommand } from "../../../application/port/in/full_product_registration_command";
import { FullProductRegistrationUseCase } from "../../../application/port/in/full_product_registration_use_case";
import { badRequest, noContent, serverError } from "../../helpers/http_helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http_response";

export class FullProductRegistrationController implements Controller {
  constructor(
    readonly fullProductRegistrationController: FullProductRegistrationUseCase
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
      const register = this.fullProductRegistrationController.registerAproduct(
        command
      );
      if (register instanceof Error) return badRequest(register);
      return noContent();
    } catch (error) {
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
