import { hash } from "argon2";

import prisma from "@/utils/prisma";
import { AuthDto } from "@/libs/definitions";
import { UserWithIncludes } from "@/libs/types";

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      stores: true,
      favorites: true,
      orders: true,
    },
  });

  return user as UserWithIncludes;
}

export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      stores: true,
      favorites: true,
      orders: true,
    },
  });

  return user as UserWithIncludes;
}

export async function createUser(data: AuthDto) {
  const newUser = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: await hash(data.password as string),
    },
  });

  return newUser;
}
