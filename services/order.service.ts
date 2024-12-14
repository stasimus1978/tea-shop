import { axiosWithAuth } from "@/api/api.interceptors";

import { API_URL } from "@/config/api.config";

import type {
  EnumOrderStatus,
  IPaymentsResponse
} from "@/shared/types/order.type";

type TypeData = {
  status?: EnumOrderStatus;
  items: {
    quantity: number;
    price: number;
    productId: string;
    storeId: string;
  }[];
};

class OrderService {
  async place(data: TypeData) {
    return axiosWithAuth<IPaymentsResponse>({
      url: API_URL.orders(`/place`),
      method: "POST",
      data
    });
  }
}

export const orderService = new OrderService();
