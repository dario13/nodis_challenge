import { Controller } from "../../adapters/protocols/controller";
import { LoadProductController } from "../../adapters/web/controllers/load_product_controller";
import { loggerFactory } from "../logger_factory";
import { loadProductQueryFactory } from "../queries/load_product_query";

export const loadProductControllerFactory = (): Controller => {
  return new LoadProductController(loadProductQueryFactory(), loggerFactory());
};
