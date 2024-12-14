import type { Prisma, User } from "@prisma/client";

export type UserItem = User;
export type UserIncludes = Prisma.UserGetPayload<{
  include: {
    favorites: true;
    orders: true;
    stores: true;
  };
}>;
