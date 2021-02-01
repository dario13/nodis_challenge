import { Express } from "express";
import { expressRouteAdapter } from "../adapters/protocols/express-route-adapter";
import { deleteUserProductControllerFactory } from "../factories/controllers/delete_user_product_controller_factory";
import { fullProductRegistrationControllerFactory } from "../factories/controllers/full_product_registration_controller_factory";
import { loadUserProductsControllerFactory } from "../factories/controllers/load_user_products_controller_factory";
import { simpleRegistrationControllerFactory } from "../factories/controllers/simple_registration_controller_factory";
import { loadProductControllerFactory } from "../factories/controllers/load_product_controller_factory";
import { updateUserProductControllerFactory } from "../factories/controllers/update_user_product_controller_factory";
import { createUserControllerFactory } from "../factories/controllers/create_user_controller_factory";

export default (app: Express): void => {
  app.delete(
    "/user_product",
    expressRouteAdapter(deleteUserProductControllerFactory())
  );
  app.post(
    "/full_product_registration",
    expressRouteAdapter(fullProductRegistrationControllerFactory())
  );
  app.post(
    "/simple_product_registration",
    expressRouteAdapter(simpleRegistrationControllerFactory())
  );
  app.post("/user", expressRouteAdapter(createUserControllerFactory()));
  app.get("/product", expressRouteAdapter(loadProductControllerFactory()));
  app.put(
    "/user_product",
    expressRouteAdapter(updateUserProductControllerFactory())
  );
  app.get(
    "/user_products",
    expressRouteAdapter(loadUserProductsControllerFactory())
  );
};
