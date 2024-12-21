import { type Category } from "@prisma/client";

import prisma from "@/utils/prisma";

import { type CategoryDto } from "@/libs/definitions";

export async function getCategoryById(id: string) {
  // TODO: authenticate user
  const category = await prisma.category.findUnique({
    where: { id }
  });

  if (!category) throw new Error("Цвет не найден");

  return category as Category;
}

export async function createCategory(category: CategoryDto) {
  // TODO: authenticate user

  const newCategory = await prisma.category.create({
    data: {
      title: category.title,
      description: category.description
    }
  });

  return newCategory;
}

export async function updateCategory(categoryId: string, category: CategoryDto) {
  // TODO: authenticate user

  const isExist = await getCategoryById(categoryId);

  if (!isExist) throw new Error("Цвет не найден");

  const updateStore = await prisma.category.update({
    where: { id: categoryId },
    data: {
      title: category.title,
      description: category.description
    }
  });

  return updateStore;
}

export async function deleteCategory(storeId: string) {
  // TODO: authenticate user
  const isExist = await getCategoryById(storeId);

  if (!isExist) throw new Error("Category не найден");

  const deleteStore = await prisma.category.delete({
    where: { id: storeId }
  });

  return deleteStore;
}
