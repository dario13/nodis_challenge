import { Express } from "express";
import { expressRouteAdapter } from "../adapters/protocols/express-route-adapter";
import { deleteUserProductControllerFactory } from "../factories/controllers/delete_user_product_controller_factory";
import { fullProductRegistrationControllerFactory } from "../factories/controllers/full_product_registration_controller_factory";
import { loadUserProductsControllerFactory } from "../factories/controllers/load_user_products_controller_factory";
import { simpleRegistrationControllerFactory } from "../factories/controllers/simple_registration_controller_factory";
import { loadProductControllerFactory } from "../factories/controllers/load_product_controller_factory";
import { updateUserProductControllerFactory } from "../factories/controllers/update_user_product_controller_factory";

export default (app: Express): void => {
  app.delete(
    "/user_product",
    expressRouteAdapter(deleteUserProductControllerFactory())
  );
  app.put(
    "/full_product_registration",
    expressRouteAdapter(fullProductRegistrationControllerFactory())
  );
  app.put(
    "/simple_product_registration",
    expressRouteAdapter(simpleRegistrationControllerFactory())
  );
  app.get("/user_product", expressRouteAdapter(loadProductControllerFactory()));
  app.post(
    "/user_product",
    expressRouteAdapter(updateUserProductControllerFactory())
  );
  app.get(
    "/user_products",
    expressRouteAdapter(loadUserProductsControllerFactory())
  );
};
