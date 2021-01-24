import { Express } from "express";
import {
  bodyparser,
  contentType,
  cors,
  morganMiddleware,
} from "./middlewares/";

export default (app: Express): void => {
  app.use(bodyparser);
  app.use(cors);
  app.use(contentType);
  app.use(morganMiddleware);
};
