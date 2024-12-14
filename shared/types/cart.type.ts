import type { ProductItem } from "./product.type";

export interface ICartItem {
  id: number;
  product: ProductItem;
  quantity: number;
  price: number;
}
