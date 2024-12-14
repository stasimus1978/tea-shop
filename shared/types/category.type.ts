import type { Category, Prisma } from "@prisma/client";

export type CategoryItem = Category;

export type CategoryIncludes = Prisma.CategoryGetPayload<{
  include: { store: true; products: true };
}>;

export type CategoryInputProps = Pick<CategoryItem, "title" | "description">;
