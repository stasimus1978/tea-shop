import type { Prisma, Store } from "@prisma/client";

export type StoreItem = Store;
export type StoreIncludes = Prisma.StoreGetPayload<{
  include: {
    categories: true;
    products: true;
    colors: true;
    orderItems: true;
    reviews: true;
    user: true;
  };
}>;

export type StoreCreateProps = Pick<StoreItem, "title">;

export type StoreEditProps = Omit<StoreItem, "id">;
