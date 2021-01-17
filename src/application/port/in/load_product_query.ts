import { Product } from "../../../domain/product";

export interface LoadProductQuery {
  getProduct(gtin13: string): Promise<Product>;
}
