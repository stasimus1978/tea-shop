import { axiosClassic } from "@/api/api.interceptors";

import { API_URL } from "@/config/api.config";

import type { AuthFormInput, AuthResponse } from "@/shared/types/auth.type";

import { removeFromStorage, saveTokenStorage } from "./auth-token.service";

class AuthService {
  async main(type: "login" | "register", data: AuthFormInput) {
    const response = await axiosClassic<AuthResponse>({
      url: API_URL.auth(`/${type}`),
      method: "POST",
      data
    });

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response;
  }

  async getNewTokens() {
    const response = await axiosClassic<AuthResponse>({
      url: API_URL.auth(`/login/access-token`),
      method: "POST"
    });

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response;
  }

  async logout() {
    const response = await axiosClassic<boolean>({
      url: API_URL.auth(`/logout`),
      method: "POST"
    });

    if (response.data) removeFromStorage();

    return response;
  }
}

export const authService = new AuthService();
