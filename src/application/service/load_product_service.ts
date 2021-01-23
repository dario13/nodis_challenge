import { Product } from "../../domain/product";
import { LoadProductQuery } from "../port/in/query/load_product_query";
import { LoadProductPort } from "../port/out/load_product_port";

export class LoadProductService implements LoadProductQuery {
  constructor(readonly loadProductPort: LoadProductPort) {}

  async getProduct(gtin13: string): Promise<Product> {
    return await this.loadProductPort.loadProduct(gtin13);
  }
}
