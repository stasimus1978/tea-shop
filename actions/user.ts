import { hash } from "argon2";

import prisma from "@/utils/prisma";

import { type AuthDto } from "@/libs/definitions";
import { type UserWithIncludes } from "@/libs/types";

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      stores: true,
      favorites: true,
      orders: true
    }
  });

  return user as UserWithIncludes;
}

export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      stores: true,
      favorites: true,
      orders: true
    }
  });

  return user as UserWithIncludes;
}

/**
 *  Toggle favorite product
 * @param productId
 * @param userId
 * @returns
 */
export async function toggleFavorite(productId: string, userId: string) {
  // TODO: authenticate user
  const user = await getUserById(userId);

  const isExist = user.favorites.some(product => product.id === productId);

  await prisma.user.update({
    where: { id: userId },
    data: {
      favorites: {
        [isExist ? "disconnect" : "connect"]: { id: productId }
      }
    }
  });

  return true;
}

/**
 *  Get user profile
 * @param id
 * @returns
 */

export async function getUserProfile(id: string) {
  // TODO: authenticate user
  const profile = await getUserById(id);

  return profile;
}

export async function createUser(data: AuthDto) {
  const newUser = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: await hash(data.password as string)
    }
  });

  return newUser;
}
