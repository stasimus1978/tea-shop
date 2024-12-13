import { Color } from "@prisma/client";

import prisma from "@/utils/prisma";
import { ColorDto } from "@/libs/definitions";

export async function getColorById(id: string) {
  // TODO: authenticate user
  const color = await prisma.color.findUnique({
    where: { id },
  });

  if (!color) throw new Error("Цвет не найден");

  return color as Color;
}

export async function createColor(color: ColorDto) {
  // TODO: authenticate user

  const newColor = await prisma.color.create({
    data: {
      name: color.name,
      value: color.value,
    },
  });

  return newColor;
}

export async function updateColor(colorId: string, color: ColorDto) {
  // TODO: authenticate user

  const isExist = await getColorById(colorId);

  if (!isExist) throw new Error("Цвет не найден");

  const updateStore = await prisma.color.update({
    where: { id: colorId },
    data: {
      name: color.name,
      value: color.value,
    },
  });

  return updateStore;
}

export async function deleteColor(storeId: string) {
  // TODO: authenticate user
  const isExist = await getColorById(storeId);

  if (!isExist) throw new Error("Color не найден");

  const deleteStore = await prisma.color.delete({
    where: { id: storeId },
  });

  return deleteStore;
}
