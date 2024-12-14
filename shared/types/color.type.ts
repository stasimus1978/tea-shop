import type { Color, Prisma } from "@prisma/client";

export type ColorItem = Color;

export type ColorIncludes = Prisma.ColorGetPayload<{
  include: { store: true };
}>;

export type ColorInputProps = Pick<ColorItem, "name" | "value">;
