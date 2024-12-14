import { axiosWithAuth } from "@/api/api.interceptors";

import { API_URL } from "@/config/api.config";

import type { ColorInputProps, ColorItem } from "@/shared/types/color.type";

class ColorService {
  async getByStoreId(id: string) {
    const { data } = await axiosWithAuth<ColorItem[]>({
      url: API_URL.colors(`/by-storeId/${id}`),
      method: "GET"
    });

    return data || [];
  }

  async getById(id: string) {
    const { data } = await axiosWithAuth<ColorItem>({
      url: API_URL.colors(`/by-id/${id}`),
      method: "GET"
    });

    return data;
  }

  async create(data: ColorInputProps, storeId: string) {
    const { data: createdColor } = await axiosWithAuth<ColorItem>({
      url: API_URL.colors(`/${storeId}`),
      method: "POST",
      data
    });

    return createdColor;
  }

  async update(data: ColorInputProps, id: string) {
    const { data: updatedColor } = await axiosWithAuth<ColorItem>({
      url: API_URL.colors(`/${id}`),
      method: "PUT",
      data
    });

    return updatedColor;
  }

  async delete(id: string) {
    const { data: deletedColor } = await axiosWithAuth<ColorItem>({
      url: API_URL.colors(`/${id}`),
      method: "DELETE"
    });

    return deletedColor;
  }
}

export const colorService = new ColorService();
