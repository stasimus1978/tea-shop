import type { Prisma, Review } from "@prisma/client";

export type ReviewItem = Review;

export type ReviewIncludes = Prisma.ReviewGetPayload<{
  include: { store: true; products: true; product: true; user: true };
}>;

export type ReviewInputProps = Pick<ReviewItem, "rating" | "text">;
