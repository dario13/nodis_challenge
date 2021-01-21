import { Controller } from "../../adapters/protocols/controller";
import { LoadUserProductsController } from "../../adapters/web/controllers/load_user_products_controller";
import { loadUserProductsQueryFactory } from "../queries/load_user_products_query";

export const loadUserProductsControllerFactory = (): Controller => {
  return new LoadUserProductsController(loadUserProductsQueryFactory());
};
