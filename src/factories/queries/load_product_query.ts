import { LoadProductQuery } from "../../application/port/in/query/load_product_query";
import { LoadProductService } from "../../application/service/load_product_service";
import { mongoRepositoryFactory } from "../repositories/mongo_repository_factory";

export const loadProductQueryFactory = (): LoadProductQuery => {
  return new LoadProductService(mongoRepositoryFactory);
};
