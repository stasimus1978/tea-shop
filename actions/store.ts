import { type Store } from "@prisma/client";

import prisma from "@/utils/prisma";

import { type StoreDto } from "@/libs/definitions";

export async function getStoreById(storeId: string, userId: string) {
  // TODO: authenticate user
  const store = await prisma.store.findUnique({
    where: { id: storeId, userId }
  });

  if (!store) throw new Error("Магазин не найден");

  return store as Store;
}

export async function createStore(store: StoreDto, userId: string) {
  // TODO: authenticate user

  const newStore = await prisma.store.create({
    data: {
      title: store.title,
      description: store.description,
      userId
    }
  });

  return newStore;
}

export async function updateStore(storeId: string, store: StoreDto, userId: string) {
  // TODO: authenticate user

  const isExist = await getStoreById(storeId, userId);

  if (!isExist) throw new Error("Магазин не найден");

  const updateStore = await prisma.store.update({
    where: { id: storeId },
    data: {
      title: store.title,
      description: store.description
    }
  });

  return updateStore;
}

export async function deleteStore(storeId: string, userId: string) {
  // TODO: authenticate user

  const isExist = await getStoreById(storeId, userId);

  if (!isExist) throw new Error("Магазин не найден");

  const deleteStore = await prisma.store.delete({
    where: { id: storeId }
  });

  return deleteStore;
}
