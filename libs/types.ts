import { Prisma } from "@prisma/client";

// export type UserItem = User;

// export type UserCreate = Omit<User, "id" | "createAt" | "updateAt" | "picture">;

export type UserWithIncludes = Prisma.UserGetPayload<{
  include: {
    stores: true;
    favorites: true;
    orders: true;
  };
}>;
