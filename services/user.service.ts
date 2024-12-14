import { axiosWithAuth } from "@/api/api.interceptors";

import { API_URL } from "@/config/api.config";

import type { UserItem } from "@/shared/types/user.type";

class UserService {
  async getProfile() {
    const response = await axiosWithAuth<UserItem[]>({
      url: API_URL.users(`/profile`),
      method: "GET"
    });

    return response;
  }

  async toggleFavorite(productId: string) {
    return axiosWithAuth<UserItem>({
      url: API_URL.users(`/profile/favorites/${productId}`),
      method: "PATCH"
    });
  }
}

export const userService = new UserService();
