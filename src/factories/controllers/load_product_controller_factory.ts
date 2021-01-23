import { Controller } from "../../adapters/protocols/controller";
import { LoadProductController } from "../../adapters/web/controllers/load_product_controller";
import { loadProductQueryFactory } from "../queries/load_product_query";

export const loadProductControllerFactory = (): Controller => {
  return new LoadProductController(loadProductQueryFactory());
};
