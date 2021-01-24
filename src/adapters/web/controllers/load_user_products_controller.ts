import { LoadUserProducstQuery } from "../../../application/port/in/query/load_user_products_query";
import { badRequest, ok } from "../../helpers/http_helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http_response";
import { Logger } from "../../persistence/logger/logger";

export class LoadUserProductsController implements Controller {
  constructor(
    readonly loadUserProductsQuery: LoadUserProducstQuery,
    readonly logger: Logger
  ) {}
  async run(
    request: LoadUserProductsController.Request
  ): Promise<HttpResponse> {
    try {
      const products = await this.loadUserProductsQuery.getUserProducts(
        request.email
      );
      return ok(products);
    } catch (error) {
      this.logger.error(error);
      return badRequest(error);
    }
  }
}

export namespace LoadUserProductsController {
  export type Request = {
    email: string;
  };
}
