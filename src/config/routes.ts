import { Express, Router } from "express";
import { expressRouteAdapter } from "../adapters/protocols/express-route-adapter";
import { simpleRegistrationControllerFactory } from "../factories/controllers/simple_registration_controller_factory";

export default (app: Express): void => {
  app.post(
    "/simple_registration",
    expressRouteAdapter(simpleRegistrationControllerFactory())
  );
};
