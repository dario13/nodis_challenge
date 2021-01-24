import { LoadProductQuery } from "../../../application/port/in/query/load_product_query";
import { badRequest, ok } from "../../helpers/http_helper";
import { Logger } from "../../persistence/logger/logger";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http_response";

export class LoadProductController implements Controller {
  constructor(
    readonly loadProductQuery: LoadProductQuery,
    readonly logger: Logger
  ) {}
  async run(request: LoadProductController.Request): Promise<HttpResponse> {
    try {
      const product = await this.loadProductQuery.getProduct(request.gtin13);
      return ok(product);
    } catch (error) {
      this.logger.error(error);
      return badRequest(error);
    }
  }
}

export namespace LoadProductController {
  export type Request = {
    gtin13: string;
  };
}
