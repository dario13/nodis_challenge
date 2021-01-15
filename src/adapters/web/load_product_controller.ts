import { LoadProductQuery } from "../../application/port/in/load_product_query";
import { ok, serverError } from "../helpers/http_helper";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http_response";

export class LoadProductController implements Controller {
  constructor(readonly loadProductQuery: LoadProductQuery) {}
  async run(request: LoadProductController.Request): Promise<HttpResponse> {
    try {
      const product = this.loadProductQuery.getProduct(request.gtin13);
      return ok(product);
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace LoadProductController {
  export type Request = {
    gtin13: string;
  };
}
