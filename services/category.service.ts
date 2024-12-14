import { axiosWithAuth } from "@/api/api.interceptors";

import { API_URL } from "@/config/api.config";

import type {
  CategoryInputProps,
  CategoryItem
} from "@/shared/types/category.type";

class CategoryService {
  async getByStoreId(id: string) {
    const { data } = await axiosWithAuth<CategoryItem[]>({
      url: API_URL.categories(`/by-storeId/${id}`),
      method: "GET"
    });

    return data;
  }

  async getById(id: string) {
    const { data } = await axiosWithAuth<CategoryItem>({
      url: API_URL.categories(`/by-id/${id}`),
      method: "GET"
    });

    return data;
  }

  async create(data: CategoryInputProps, storeId: string) {
    const { data: createdCategory } = await axiosWithAuth<CategoryItem>({
      url: API_URL.categories(`/${storeId}`),
      method: "POST",
      data
    });

    return createdCategory;
  }

  async update(data: CategoryInputProps, id: string) {
    const { data: updatedCategory } = await axiosWithAuth<CategoryItem>({
      url: API_URL.categories(`/${id}`),
      method: "PUT",
      data
    });

    return updatedCategory;
  }

  async delete(id: string) {
    const { data: deletedCategory } = await axiosWithAuth<CategoryItem>({
      url: API_URL.categories(`/${id}`),
      method: "DELETE"
    });

    return deletedCategory;
  }
}

export const categoryService = new CategoryService();
