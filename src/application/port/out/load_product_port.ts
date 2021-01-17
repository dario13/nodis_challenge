import { Product } from "../../../domain/product";

export interface LoadProductPort {
  loadProduct(gtin13: string, name?: string): Promise<Product>;
}
