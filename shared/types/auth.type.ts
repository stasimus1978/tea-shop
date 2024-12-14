import type { UserIncludes, UserItem } from "./user.type";

export type AuthFormInput = Pick<UserItem, "email" | "password" | "name">;

export type AuthResponse = {
  user: UserItem & UserIncludes;
  accessToken: string;
};
