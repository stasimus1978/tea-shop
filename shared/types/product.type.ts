import type { Prisma, Product } from "@prisma/client";

export type ProductItem = Product;
export type ProductIncludes = Prisma.ProductGetPayload<{
  include: {
    category: true;
    color: true;
    orderItems: true;
    reviews: true;
    store: true;
    user: true;
  };
}>;

export type ProductFormInput = Omit<
  ProductItem & ProductIncludes,
  "id" | "reviews" | "store" | "category" | "color"
>;
