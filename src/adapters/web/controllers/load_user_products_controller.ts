import { LoadUserProducstQuery } from "../../../application/port/in/query/load_user_products_query";
import { ok, serverError } from "../../helpers/http_helper";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http_response";

export class LoadUserProductsController implements Controller {
  constructor(readonly loadUserProductsQuery: LoadUserProducstQuery) {}
  async run(
    request: LoadUserProductsController.Request
  ): Promise<HttpResponse> {
    try {
      const products = this.loadUserProductsQuery.getUserProducts(
        request.email
      );
      return ok(products);
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace LoadUserProductsController {
  export type Request = {
    email: string;
  };
}
