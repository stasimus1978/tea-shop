import { axiosWithAuth } from "@/api/api.interceptors";

import { API_URL } from "@/config/api.config";

import type { StoreInputProps, StoreItem } from "@/shared/types/store.type";

class StoreService {
  async getByStoreId(id: string) {
    const { data } = await axiosWithAuth<StoreItem[]>({
      url: API_URL.stores(`/by-storeId/${id}`),
      method: "GET"
    });

    return data || [];
  }

  async getById(id: string) {
    const { data } = await axiosWithAuth<StoreItem>({
      url: API_URL.stores(`/by-id/${id}`),
      method: "GET"
    });

    return data;
  }

  async create(data: StoreInputProps, storeId: string) {
    const { data: createdStore } = await axiosWithAuth<StoreItem>({
      url: API_URL.stores(`/${storeId}`),
      method: "POST",
      data
    });

    return createdStore;
  }

  async update(data: StoreInputProps, id: string) {
    const { data: updatedStore } = await axiosWithAuth<StoreItem>({
      url: API_URL.stores(`/${id}`),
      method: "PUT",
      data
    });

    return updatedStore;
  }

  async delete(id: string) {
    const { data: deletedStore } = await axiosWithAuth<StoreItem>({
      url: API_URL.stores(`/${id}`),
      method: "DELETE"
    });

    return deletedStore;
  }
}

export const storeService = new StoreService();
