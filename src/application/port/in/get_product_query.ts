import { Product } from "../../../domain/product";

export interface getProductQuery {
  getProduct(gtin13: string): Product;
}
