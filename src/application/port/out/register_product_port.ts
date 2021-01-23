import { Product } from "../../../domain/product";

export interface RegisterProductPort {
  registerProduct(product: Product): Promise<void>;
}
